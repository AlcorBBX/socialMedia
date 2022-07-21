import { IPost } from '@/types/post.inteface'
import { Avatar } from 'antd'
import Link from 'next/link'
import React, { FC } from 'react'

const UserInfo:FC<{post: IPost}> = ({post}) => {
  return (
    <Link
        href={`/profile/${post.user._id}`}
        style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#111',
            marginBottom: '12px'
        }}>
        <a>
            <div
                style={{
                    position: 'relative',
                    marginRight: '2px',
                    width: '50px',
                    height: '50px'
                }}>
                <Avatar 
                    size = {46}
                    src={post.user.avatar}/>
                    
            </div>
            <div>
                <div>{post.user.name}</div>
                <div>{post.createdAt}</div>
            </div>
        </a>
    </Link>
  )
}

export default UserInfo