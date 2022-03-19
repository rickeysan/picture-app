import { Post } from "./Post"
import db from "../firebase/index"
import { useState, useEffect } from "react"
import { collection, getDoc, orderBy, query, onSnapshot, getDocs } from 'firebase/firestore'
import { Search } from "./Search"

export const Posts = () => {
    const [posts, setPosts] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        const postData = collection(db, "posts")
        // console.log(postData)
        getDocs(postData).then((snapShot) => {
            console.log(snapShot.docs.map((doc) => ({ ...doc.data() })))
            setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })))
            console.log('postsの中身')
            console.log(posts)
        })
    }, [])

    useEffect(() => {
        console.log('searchTextが変更されました')
        console.log(posts)
        console.log(posts[0])
        // console.log(posts[0]['comment'])
        // postsの中身に対して、検索キーワードで絞り込みをかけて、新しい値をセットする
        // const newPosts = posts.filter(filterPosts(searchText))
        // console.log(newPosts)
        // setPosts(newPosts)
    }, [searchText])

    const handleSearchText = (value) => {
        console.log('handleSearchTextメソッドです')
        console.log(value)
        setSearchText(value)
    }

    const filterPosts = (elm) => {
        const regexp = new RegExp('^' + searchText, 'i')
        return (elm.comment.match(regexp))
    }

    return (
        <div className="w-full">
            <h2>投稿一覧</h2>
            <Search handleSearchText={handleSearchText} />
            {posts.map((post, index) => (
                <Post post={post} key={index} />
            ))}
        </div>
    )
}