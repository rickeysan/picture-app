import { useState, useEffect } from 'react'

type Props = {
  handleSearchText: Function
}

export const Search = (props: Props): JSX.Element => {
  const [value, setValue] = useState('')
  const handleSearchText = props.handleSearchText

  useEffect(() => {
    handleSearchText(value)
  }, [value])

  return (
    <div className="grid justify-items-center ">
      <div className="form-control">
        <label className="label justify-items-center">
          <span className="label-text">投稿を検索する</span>
        </label>
        <label className="input-group">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            value={value}
            onChange={(event) => {
              setValue(event.target.value)
            }}
            placeholder="キーワード"
            className="input input-bordered"
          />
        </label>
      </div>
    </div>
  )
}
