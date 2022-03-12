import { Post } from "./Post"
import db from "../firebase/index"
import { useState, useEffect } from "react"
import { collection, getDoc, orderBy, query, onSnapshot, getDocs } from 'firebase/firestore'

export const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const postData = collection(db, "posts")
        console.log(postData)
        getDocs(postData).then((snapShot) => {
            console.log(snapShot.docs.map((doc) => ({ ...doc.data() })))
            setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })))
        })
    }, [])

    return (
        <div className="w-full">
            {posts.map((post, index) => (
                <Post post={post} key={index} />
            ))}
        </div>
    )
}