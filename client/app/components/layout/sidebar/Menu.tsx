import { Card, List } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { menu } from './dataMenu'

const Menu = () => {
  const { push } = useRouter()
  return (
    <Card >
      <List itemLayout='vertical'>
        {menu.map((item) => (
          <List.Item key={item.link}
            onClick={() => push(item.link)}>
            <List.Item.Meta title={item.title} />
          </List.Item>
        ))}
      </List>
    </Card>
  )
}

export default Menu