type Props = {
  post: {
    name: string
    comment: string
    picture: {
      primaryImage: string
    }
    updateDate: string
  }
  setIsModal: Function
  setModalImg: Function
}

export const Post = (props: Props): JSX.Element => {
  console.log('Postです')
  const { post, setIsModal, setModalImg } = props
  const name = post.name
  const comment = post.comment
  const imgPath = post.picture.primaryImage
  const date = post.updateDate
  const targetDate = new Date(date)
  const shapedDate =
    targetDate.getFullYear() +
    '年' +
    targetDate.getMonth() +
    '月' +
    targetDate.getDate() +
    '日' +
    targetDate.getHours() +
    '時' +
    targetDate.getMinutes() +
    '分'

  return (
    <div className="inline-block card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={imgPath}
          alt="Shoes"
          onClick={() => {
            setIsModal(true)
            setModalImg(imgPath)
          }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{comment}</p>
        <div className="card-actions justify-end">
          <span>{shapedDate}</span>
        </div>
      </div>
    </div>
  )
}
