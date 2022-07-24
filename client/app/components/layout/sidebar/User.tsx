import { useAuth } from '@/hooks/useAuth'
import { Avatar, Button, Card, Col, Row } from 'antd'
import React from 'react'
import { users } from './dataUsers'

const User = () => {
  const { user } = useAuth()
  return (
    <Card>
      <Row>
        <Col span={3}>
          <Avatar src={users[0].avatar} />
        </Col>
        <Col span={9}>
          <p>{users[0].name || 'НоН'}</p>
        </Col>
      </Row>
      
      <Button>Выйти</Button>
    </Card>
  )
}

export default User