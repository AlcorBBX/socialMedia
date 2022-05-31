import { useAuth } from '@/hooks/useAuth'
import {FC} from 'react'

const Auth: FC = () => {
    const {user} = useAuth()
  return (
    <div>Auth</div>
  )
}

export default Auth