import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import db from '../firebase/index'
import { useState } from 'react'

export const PostCreate = (props) => {
  const picture = props.picture
  const [newName, setNewName] = useState('')
  const [newComment, setNewComment] = useState('')
  const postsCollectionRef = collection(db, 'posts')

  // 投稿ボタンが押されたら
  const createPost = async () => {
    console.log('createPostメソッドです')
    console.log(newName)
    console.log(newComment)
    await addDoc(postsCollectionRef, { name: newName, comment: newComment, picture: picture, updateData: Date('Y/m/d H:i:s') })
    setNewName('')
    setNewComment('')
  }


  return (
    <>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">ニックネーム</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={newName}
          onChange={(event) => { setNewName(event.target.value) }}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            この絵画から分かる事実を140字以内で書いてみましょう
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Bio"
          value={newComment}
          onChange={(event) => { setNewComment(event.target.value) }}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={() => createPost()}>
        投稿する
      </button>
    </>
  )
}
