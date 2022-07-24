import { useAuth } from '@/hooks/useAuth'
import { Col, Row } from 'antd'
import React, { FC, PropsWithChildren } from 'react'
import Sidebar from './sidebar/Sidebar'

const Layout:FC<PropsWithChildren<unknown>> = ({children}) => {
  const {user} = useAuth()
  return (
    <>
      <Row gutter={[5,2]}>
        {user && (
          <Col span={3}>
            <Sidebar/>
          </Col>
        )}
        <Col span={user ? 9 : 12}>{children}</Col>
      </Row>
    </>
  )
}

export default Layout