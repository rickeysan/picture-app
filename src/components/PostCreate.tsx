import { doc, setDoc } from 'firebase/firestore'
import db from '../firebase/index'

export const PostCreate = () => {
  // 投稿ボタンが押されたら
  const handleSubmit = () => {
    console.log('handleSubmitです')
    // Add a new document in collection "cities"
    setDoc(doc(db, 'cities', 'LA'), {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
    })
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
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            絵画を見て、気づいたことを書いてみましょう
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Bio"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={() => handleSubmit()}>
        投稿する
      </button>
    </>
  )
}
