
export const PostCreate = () => {

    // 投稿ボタンが押されたら
    const handleSubmit = () => {

    }

    return (
        <>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">ニックネーム</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">絵画を見て、気づいたことを書いてみましょう</span>
                </label>
                <textarea class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
            </div>
            <button className="btn btn-primary">投稿する</button>
        </>
    )
}