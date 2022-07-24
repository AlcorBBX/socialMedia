import Header from '@/components/layout/header/Header'
import Layout from '@/components/layout/Layout'
import AddPost from '@/components/ui/posts/AddPost'
import Posts from '@/components/ui/posts/Posts'
import React, { FC } from 'react'

const Home:FC = () => {
  return (
    <Layout>
      <AddPost/>
      <Posts/>
    </Layout>
  )
}

export default Home