import { useState } from "react"

export const Modal = (props) => {
    const [isModal, setIsModal] = useState(false)
    const picture = props.picture

    return (
        <div className="h-96 w-9/12 flex-nowrap justify-center items-center top-10 left-10 fixed z-10 bg-stone-100">
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