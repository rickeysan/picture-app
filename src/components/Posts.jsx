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
        const q = query(postData, orderBy("updateData", "desc"));
        /* リアルタイムで取得 */
        onSnapshot(q, (querySnapshot) => {
            console.log('リアルタイムです')
            console.log(querySnapshot.docs);
            setAllPosts(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
            setFilteredPosts(querySnapshot.docs.map((doc) => ({ ...doc.data() })))
        });
    }, [])

    useEffect(() => {
        console.log('searchTextが変更されました')
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