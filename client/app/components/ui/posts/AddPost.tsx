import { useAuth } from '@/hooks/useAuth'
import { Alert, Card, Input } from 'antd'
import React, { FC, KeyboardEvent, useState } from 'react'

const error = ''

const AddPost: FC = () => {
    const [content, setContent] = useState('')
    const {user} = useAuth()

    const addPostHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && user){
            setContent('')
        }
    }
    return ( 
        <>
            {error && (
                <Alert message = {error} type = 'error' showIcon/>
            )}
            <Card
                style={{borderRadius: '25px'}}>
                <Input
                    placeholder='Расскажи что у тубя нового'
                    onChange={e => setContent(e.target.value)}
                    value={content}
                    style={{borderRadius: '25px'}}/>
            </Card>
            
        </>
    )
}

export default AddPost