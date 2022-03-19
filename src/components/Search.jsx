import { useState, useEffect } from "react"

export const Search = (props) => {
    const [value, setValue] = useState('')
    const handleSearchText = props.handleSearchText

    useEffect(() => {
        handleSearchText(value)
    }, [value])

    return (
        <div className="form-control">
            <div className="input-group">
                <input type="text" placeholder="絞り込みたいキーワードを入力"
                    className="input input-bordered"
                    value={value}
                    onChange={(event) => { setValue(event.target.value) }} />
                <button className="btn btn-square">
                </button>
            </div>
        </div>
    )
}