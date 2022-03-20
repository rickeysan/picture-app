
export const Modal = (props) => {
    const picture = props.picture
    const isModal = props.isModal
    const setIsModal = props.setIsModal
    const activeStyle = "h-96 w-9/12 flex-nowrap justify-center items-center top-10 left-10 fixed z-10 bg-stone-100"
    const normalStyle = "h-96 w-9/12 flex-nowrap justify-center items-center top-10 left-10 fixed z-10 bg-stone-100 hidden"
    const modalStyle = isModal ? activeStyle : normalStyle

    return (
        <div className={modalStyle} >
            <label className="btn btn-sm btn-circle absolute right-2 top-2"
                onClick={() => setIsModal(false)}
            >✕</label>
            <img
                src={picture.primaryImage}
                alt="Album"
                className="w-9/12 h-3/4 mx-auto object-contain cursor-pointer"
            />
            <div className="">
                <a className="link" target="_blank" rel="noreferrer"
                    href={picture.objectURL}>詳細ページへ</a>
            </div>
        </div>
    )
}