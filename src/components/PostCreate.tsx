import { addDoc, collection } from 'firebase/firestore'
import db from '../firebase/index'
import { useState } from 'react'

type Props = {
  picture: {
    primaryImage: string
  }
  notify: Function
}

export const PostCreate = (props: Props): JSX.Element => {
  const { picture, notify } = props
  const postsCollectionRef = collection(db, 'posts')
  const [newName, setNewName] = useState<string>('')
  const [newComment, setNewComment] = useState<string>('')
  const [errForm, setErrForm] = useState<string>('')
  const [errNameMsg, setErrNameMsg] = useState<string>('')
  const [errCommentMsg, setErrCommentMsg] = useState<string>('')

  const judgeForm = () => {
    if (newComment.length > 140) {
      setErrForm('err-form__label')
    } else {
      setErrForm('')
    }
  }

  const validNameRequired = (value: string): boolean => {
    if (value) {
      setErrNameMsg('')
      return true
    } else {
      setErrNameMsg('入力必須です')
      return false
    }
  }

  const validNameMaxLen = (value: string, length: number) => {
    if (value.length <= length) {
      setErrNameMsg('')
      return true
    } else {
      setErrNameMsg(length + '字以内で入力してください')
      return false
    }
  }

  const validCommentRequired = (value: string) => {
    if (value) {
      setErrCommentMsg('')
      return true
    } else {
      setErrCommentMsg('入力必須です')
      return false
    }
  }

  const validCommentMaxLen = (value: string, length: number) => {
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
    const $flg1 = validNameRequired(newName)
    const $flg2 = validCommentRequired(newComment)
    if ($flg1 && $flg2) {
      const $flg3 = validNameMaxLen(newName, 30)
      const $flg4 = validCommentMaxLen(newComment, 140)
      if ($flg3 && $flg4) {
        const nowStr: string = Date()
        await addDoc(postsCollectionRef, {
          name: newName,
          comment: newComment,
          picture: picture,
          updateDate: nowStr,
        })
        setNewName('')
        setNewComment('')
        notify('投稿に成功しました')
      }
    }
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
          onChange={(event) => {
            setNewName(event.target.value)
          }}
        />
        <span>{errNameMsg}</span>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            この絵画から分かる事実を140字以内で書いてみましょう 　　{' '}
            <span className={errForm}>{newComment.length} / 140文字</span>
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="コメント"
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value)
          }}
          onKeyUp={() => {
            judgeForm()
          }}
        ></textarea>
        <span>{errCommentMsg}</span>
      </div>
      <button className="btn btn-primary" onClick={() => createPost()}>
        投稿する
      </button>
    </>
  )
}
