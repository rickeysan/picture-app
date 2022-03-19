import { useState } from "react"

export const Modal = (props) => {
    const picture = props.picture
    const isModal = props.isModal
    console.log('Modalです')
    console.log(isModal)
    const activeStyle = "h-96 w-9/12 flex-nowrap justify-center items-center top-10 left-10 fixed z-10 bg-stone-100"
    const normalStyle = "h-96 w-9/12 flex-nowrap justify-center items-center top-10 left-10 fixed z-10 bg-stone-100 hidden"
    const modalStyle = isModal ? activeStyle : normalStyle // どちらのスタイルを当てるかを判別

    return (
        <div className={modalStyle} >
            <img
                src={picture}
                alt="Album"
                className="w-9/12 h-3/4 mx-auto object-contain cursor-pointer"
                onClick={() => console.log('画像がクリックされました')}
            />
            <div className="">
                <a className="link" href="https://qiita.com/metal_kentucky/items/6ee91514ca19edf453df">I'm a simple link</a>
            </div>
        </div>
    )
}