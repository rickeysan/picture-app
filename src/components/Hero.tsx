import ReactLoading from 'react-loading'
import { PostCreate } from './PostCreate'

type Props = {
  picture: {
    primaryImage: string
  }
  changePicture: Function
  loading: boolean
  setIsModal: Function
  notify: Function
}

export const Hero = (props: Props): JSX.Element => {
  console.log('Heroです')
  const { picture, changePicture, loading, setIsModal, notify } = props

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">絵画をじっくりと観察してみましょう</h2>
          <PostCreate
            picture={picture}
            changePicture={changePicture}
            notify={notify}
          />
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={() => changePicture()}>
              他の画像を見る
            </button>
          </div>
        </div>
        <figure className="w-6/12 h-96">
          {loading && <ReactLoading type="spin" color="#696969" />}
          <img
            src={picture.primaryImage}
            alt=""
            className="w-full h-full object-contain cursor-pointer"
            onClick={() => setIsModal(true)}
          />
        </figure>
      </div>
    </>
  )
}
