import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import db from './firebase/index'
import { Posts } from './components/Posts'
import { Modal } from 'components/Modal'
import { useState } from 'react'

import { useEffect } from 'react'
import ReactLoading from 'react-loading'
import axios from './axios'

const jsonData = require('./all_picture.json')

function App() {
  const [picture, setPicture] = useState('')
  const makeRandomPictureId = () => {
    return jsonData.objectIDs[
      Math.floor(Math.random() * jsonData.objectIDs.length)
    ]
  }
  const [pictureId, setPictureId] = useState(makeRandomPictureId())
  const [loading, setLoading] = useState(false)


  const changePicture = () => {
    // console.log('changePictureです')
    setPictureId(makeRandomPictureId())
  }

  const fetchData = async (fetchUrl) => {
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
    <div className="App relative">
      <Modal picture={picture} />
      <Header />
      <Hero picture={picture} changePicture={changePicture} loading={loading} />
      <Posts />
    </div>
  )
}

export default App
