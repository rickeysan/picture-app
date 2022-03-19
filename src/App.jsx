import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import db from './firebase/index'
import { Posts } from './components/Posts'
import { Modal } from 'components/Modal'
import { useState } from 'react'

import { useEffect } from 'react'
import axios from './axios'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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
    console.log(request.data)
    setPicture(request.data)
    setLoading(false)
    return request
  }

  useEffect(() => {
    console.log('HeroのuseEffectです')
    fetchData(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${pictureId}`,
    )
  }, [pictureId])

  const [isModal, setIsModal] = useState(false)
  const notify = (value) => {
    toast.success(value, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000
    });
  }

  return (
    <div className="App relative">
      <ToastContainer />
      <Modal picture={picture} isModal={isModal} setIsModal={setIsModal} />
      <Header />
      <Hero picture={picture} changePicture={changePicture} loading={loading} setIsModal={setIsModal} notify={notify} />
      <Posts />
    </div>
  )
}

export default App
