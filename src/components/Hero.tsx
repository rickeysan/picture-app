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

export const Hero = () => {
  const [picture, setPicture] = useState('')

  const makeRandomPictureId = () => {
    return jsonData.objectIDs[
      Math.floor(Math.random() * jsonData.objectIDs.length)
    ]
  }
  const [pictureId, setPictureId] = useState(makeRandomPictureId())

  const [loading, setLoading] = useState(false)

  const changePicture = () => {
    console.log('changePictureです')
    setPictureId(makeRandomPictureId())
  }

  const fetchData = async (fetchUrl: string) => {
    setLoading(true)
    const request = await axios.get(fetchUrl)
    console.log(request.data.primaryImage)
    setPicture(request.data.primaryImage)
    setLoading(false)
    return request
  }

  useEffect(() => {
    console.log('HeroのuseEffectです')
    fetchData(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${pictureId}`,
    )
  }, [pictureId])

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">絵画をじっくりと観察してみましょう</h2>
          <PostCreate />
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={() => changePicture()}>
              他の画像を見る
            </button>
          </div>
        </div>
        <figure className="w-6/12 h-96">
          {loading && <ReactLoading type="spin" color="#696969" />}
          <img
            src={picture}
            alt="Album"
            className="w-full h-full object-contain"
          />
        </figure>
      </div>
    </>
  )
}
