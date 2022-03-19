import { Post } from "./Post"
import db from "../firebase/index"
import { useState, useEffect } from "react"
import { collection, getDoc, orderBy, query, onSnapshot, getDocs } from 'firebase/firestore'
import { Search } from "./Search"

export const Posts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [searchText, setSearchText] = useState('')
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        const postData = collection(db, "posts")
        // console.log(postData)
        getDocs(postData).then((snapShot) => {
            console.log('getDocsです')
            console.log(snapShot.docs.map((doc) => ({ ...doc.data() })))
            setAllPosts(snapShot.docs.map((doc) => ({ ...doc.data() })))
            setFilteredPosts(snapShot.docs.map((doc) => ({ ...doc.data() })))
            // console.log('allPostsの中身')
            // console.log(allPosts)
            // setIsMounted(true)
        })
    }, [])

    useEffect(() => {
        console.log('searchTextが変更されました')
        // console.log(allPosts)
        // console.log(filteredPosts)
        // console.log(posts)
        // console.log(posts[0])
        // console.log(posts[0]['comment'])
        // postsの中身に対して、検索キーワードで絞り込みをかけて、新しい値をセットする
        // const newPosts = posts.filter(filterPosts)

        if (searchText !== '') {
            console.log('検索キーワードはあります')
            const newPosts = allPosts.filter((sample) => {
                // console.log(sample.comment)
                const regexp = new RegExp(searchText)
                console.log(regexp.test(sample.comment))
                return regexp.test(sample.comment)
            })
            console.log('newPostsの中身')
            console.log(newPosts)
            setFilteredPosts(newPosts)
        } else {
            console.log('検索キーワードはありません')
            console.log(allPosts)
            setFilteredPosts(allPosts)
        }
    }, [searchText])

    const handleSearchText = (value) => {
        // console.log('handleSearchTextメソッドです')
        // console.log(value)
        setSearchText(value)
    }

    return (
        <div className="w-full">
            <h2>投稿一覧</h2>
            <Search handleSearchText={handleSearchText} />
            {filteredPosts.map((post, index) => (
                <Post post={post} key={index} />
            ))}
        </div>
    )
}