import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import db from '../firebase/index'
import { useState } from 'react'
import { isEmpty } from '@firebase/util'

export const PostCreate = (props) => {
  const picture = props.picture
  const [newName, setNewName] = useState('')
  const [newComment, setNewComment] = useState('')
  const [errForm, setErrForm] = useState('')
  const postsCollectionRef = collection(db, 'posts')
  // const [errMsg, setErrMsg] = useState({ 'name': '', 'comment': '' })
  const [errNameMsg, setErrNameMsg] = useState('')
  const [errCommentMsg, setErrCommentMsg] = useState('')


  const judgeForm = () => {
    if (newComment.length > 140) {
      console.log('文字数オーバーです')
      setErrForm('err-form__label')
    } else {
      console.log('文字数問題なしです')
      setErrForm('')
    }
  }

  const validNameRequired = (value) => {
    if (isEmpty(value)) {
      console.log('入力されていない')
      setErrNameMsg('入力必須です')
      return false
    } else {
      console.log('入力されている')
      setErrNameMsg('')
      return true
    }
  }

  const validNameMaxLen = (value, length) => {
    if (value.length <= length) {
      setErrNameMsg('')
      return true
    } else {
      setErrNameMsg(length + '字以内で入力してください')
      return false
    }
  }


  const validCommentRequired = (value) => {
    if (isEmpty(value)) {
      console.log('入力されていない')
      setErrCommentMsg('入力必須です')
      return false
    } else {
      console.log('入力されている')
      setErrCommentMsg('')
      return true
    }
  }

  const validCommentMaxLen = (value, length) => {
    if (value.length <= length) {
      setErrCommentMsg('')
      return true
    } else {
      setErrCommentMsg(length + '字以内で入力してください')
      return false
    }
  }
  // 投稿ボタンが押されたら
  const createPost = async () => {
    console.log('createPostメソッドです')
    console.log(newName)
    console.log(newComment)
    const $flg1 = validNameRequired(newName)
    const $flg2 = validCommentRequired(newComment)
    if ($flg1 && $flg2) {
      const $flg3 = validNameMaxLen(newName, 30)
      const $flg4 = validCommentMaxLen(newComment, 140)
      if ($flg3 && $flg4) {
        await addDoc(postsCollectionRef, { name: newName, comment: newComment, picture: picture, updateData: Date('Y/m/d H:i:s') })
        setNewName('')
        setNewComment('')
        console.log('createPostメソッドが終了')
      }
    }
    console.log(errNameMsg)
  }


  return (
    <>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">ニックネーム</span>
        </label>
        <input
          type="text"
          placeholder="ニックネーム"
          className="input input-bordered w-full max-w-xs"
          value={newName}
          onChange={(event) => { setNewName(event.target.value) }}
        />
        <span>{errNameMsg}</span>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            この絵画から分かる事実を140字以内で書いてみましょう  　　 <span className={errForm}>{newComment.length} / 140文字</span>
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="コメント"
          value={newComment}
          onChange={(event) => { setNewComment(event.target.value) }}
          onKeyUp={() => { judgeForm() }}
        ></textarea>
        <span>{errCommentMsg}</span>
      </div>
      <button className="btn btn-primary" onClick={() => createPost()}>
        投稿する
      </button>
    </>
  )
}
