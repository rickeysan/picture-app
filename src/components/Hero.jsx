import { useEffect } from 'react'
import { useState } from 'react'
import ReactLoading from 'react-loading'
import axios from '../axios'
import { PostCreate } from './PostCreate'

const jsonData = require('../all_picture.json')

// type Picture = {
//   title: string;
//   primaryImage: string;
// }

export const Hero = (props) => {
  const picture = props.picture
  const changePicture = props.changePicture
  const loading = props.loading
  const setIsModal = props.setIsModal
  const notify = props.notify

  console.log('imageの画像パス')
  console.log(picture)
  console.log(picture.primaryImage)
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">絵画をじっくりと観察してみましょう</h2>
          <PostCreate picture={picture} notify={notify} />
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
            alt="Album"
            className="w-full h-full object-contain cursor-pointer"
            onClick={() => setIsModal(true)}
          />
        </figure>
      </div>
    </>
  )
}
