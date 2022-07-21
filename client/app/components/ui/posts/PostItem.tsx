import { IPost } from '@/types/post.inteface'
import { Card, Image } from 'antd'
import Link from 'next/link'
import React, { FC } from 'react'
import UserInfo from './UserInfo'

const PostItem  :FC<{post: IPost}>= ({post}) => {
  return (
    <Card>
        <UserInfo post={post}/>
        <p>{post.content}</p>
        <Image width={400} src={post.image} alt=''/>
    </Card>
  )
}

export default PostItem