import AddPost from '@/components/ui/posts/AddPost'
import Posts from '@/components/ui/posts/Posts'
import React, { FC } from 'react'

const Home:FC = () => {
  return (
    <div>
      <AddPost/>
      <Posts/>
    </div>
  )
}

export default Home