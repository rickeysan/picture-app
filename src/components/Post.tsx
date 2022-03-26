type Props = {
  post: {
    name: string
    comment: string
    picture: {
      primaryImage: string
    }
  }
}

export const Post = (props: Props): JSX.Element => {
  const name = props.post.name
  const comment = props.post.comment
  const imgPath = props.post.picture.primaryImage

  return (
    <div className="inline-block card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imgPath} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{comment}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}