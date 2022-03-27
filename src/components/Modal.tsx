type Props = {
  picture: {
    primaryImage: string
    objectURL: string
  }
  isModal: boolean
  setIsModal: Function
  modalImg: string
  modalUrl: string
}

export const Modal = (props: Props): JSX.Element => {
  const { picture, isModal, setIsModal, modalImg, modalUrl } = props
  const activeStyle =
    'h-screen  w-screen flex-wrap justify-center items-center fixed z-10 bg-stone-100 pt-6'
  const normalStyle =
    'h-screen w-screen flex-wrap justify-center items-center fixed z-10 bg-stone-100 hidden pt-6'
  const modalStyle = isModal ? activeStyle : normalStyle

  return (
    <div className={modalStyle}>
      <label
        className="btn btn-m btn-circle absolute right-2 top-2"
        onClick={() => setIsModal(false)}
      >
        ✕
      </label>
      <img
        src={modalImg}
        alt=""
        className="w-9/12 h-3/4 mx-auto object-contain cursor-pointer"
      />
      <div className="mt-12">
        <a className="link" target="_blank" rel="noreferrer" href={modalUrl}>
          メトリポリタン美術館の詳細ページへ
        </a>
      </div>
    </div>
  )
}
