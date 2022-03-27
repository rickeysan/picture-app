import { Post } from './Post'
import db from '../firebase/index'
import { useState, useEffect } from 'react'
import { collection, orderBy, query, onSnapshot } from 'firebase/firestore'
import { Search } from './Search'

type Post = {
  name: string
  comment: string
  picture: {
    primaryImage: string
    objectURL: string
  }
  updateDate: string
}
type Props = {
  setIsModal: Function
  setModalImg: Function
  setModalUrl: Function
}

export const Posts = (props: Props): JSX.Element => {
  const { setIsModal, setModalImg, setModalUrl } = props
  const [allPosts, setAllPosts] = useState<Array<Post>>([])
  const [filteredPosts, setFilteredPosts] = useState<Array<Post>>([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const postData = collection(db, 'posts')
    const q = query(postData, orderBy('updateDate', 'desc'))
    /* リアルタイムで取得 */
    onSnapshot(q, (querySnapshot) => {
      console.log('リアルタイムです')
      console.log(querySnapshot.docs)
      setAllPosts(querySnapshot.docs.map((doc: any) => ({ ...doc.data() })))
      setFilteredPosts(
        querySnapshot.docs.map((doc: any) => ({ ...doc.data() })),
      )
    })
  }, [])

  useEffect(() => {
    console.log('searchTextが変更されました')
    if (searchText !== '') {
      console.log('検索キーワードはあります')
      const newPosts: Post[] = allPosts.filter((sample: Post): boolean => {
        const regexp = new RegExp(searchText)
        console.log(regexp.test(sample.comment))
        return regexp.test(sample.comment)
      })
      setFilteredPosts(newPosts)
    } else {
      setFilteredPosts(allPosts)
    }
  }, [searchText])

  const handleSearchText = (value: string): void => {
    setSearchText(value)
  }

  return (
    <div className="w-full pt-6	">
      <h2 className="text-lg	">投稿一覧</h2>
      <Search handleSearchText={handleSearchText} />
      {filteredPosts.map((post: Post, index: number) => (
        <Post
          post={post}
          key={index}
          setIsModal={setIsModal}
          setModalImg={setModalImg}
          setModalUrl={setModalUrl}
        />
      ))}
    </div>
  )
}
