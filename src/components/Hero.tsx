import { useEffect } from 'react'
import { useState } from 'react'
import axios from '../axios'
const jsonData = require('../all_picture.json')
console.log('jsonDataです')
// console.log(jsonData.objectIDs.length)
console.log(
  jsonData.objectIDs[Math.floor(Math.random() * jsonData.objectIDs.length)],
)

// type Picture = {
//   title: string;
//   primaryImage: string;
// }

export const Hero = () => {
  const [picture, setPicture] = useState('')
  useEffect(() => {
    console.log('HeroのuseEffectです')
    async function fetchData(fetchUrl: string) {
      const request = await axios.get(fetchUrl)
      console.log(request.data.primaryImage)
      setPicture(request.data.primaryImage)
      return request
    }
    const picture_id =
      jsonData.objectIDs[Math.floor(Math.random() * jsonData.objectIDs.length)]
    fetchData(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${picture_id}`,
    )
  }, [])

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
        <figure>
          <img src={picture} alt="Album" />
        </figure>
      </div>
    </>
  )
}
