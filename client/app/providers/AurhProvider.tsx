// Здесь содержится контекст
// Провайдер это то что нам отдает контекст это определенная обертка над другими компонентами, 
// которое добавляет свой функционал или свои переменные/состояния. 
// В том числе это идет обертка всего приложения (Название AuthProvider).
// Эта обертка дает нам авторизацию и все данные об авторизации
import Cookies from 'js-cookie'
import {useRouter} from 'next/router'
import {
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useEffect,
    useState
} from 'react'

import {TypeUser} from '@/services/auth/auth.helper'

// описываем контекст, что в него будет входить изначально из коробки(какие данные будут там содержаться)
interface IContext {
    // setUser - юзстейт, который помогает изменять значения (авторизован или нет)
    // оно будет либо дизпатч (TypeUser ставим свой тип USER, который будет)
    user: TypeUser
    setUser: Dispatch<SetStateAction<TypeUser>> | null
}

// //дефолт состояние Дата
// export const defaultValueAuthState = {
//     user: null,
//     accessToken: ''
// }

//создание контекста с помощью createContext
export const AuthContext = createContext<IContext>({} as IContext)

const AuthProvider: FC<PropsWithChildren<unknown>> = ({children}) => {
    const [user, setUser] = useState<TypeUser>(null)

    //Для отслеживания изменения стрницы(при изменении проверять на присутствие токена)
    const {pathname} = useRouter()

    //при одноразовой загрузке страницы
    useEffect(() => {
        //получаем токен
        const accessToken = Cookies.get('accessToken')
        //затем проверяем токен
        if(accessToken) {
            //токен тру => обновляем юзера. Из логалСторедж в состояние
            const user = JSON.parse(localStorage.getItem('user') || '')

            setUser(user)
        }
    }, []) //eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const accessToken = Cookies.get('accessToken')
        if(!accessToken && !user) {
            //AuthService.logout()
            setUser(null)
        }
    }, [pathname]) //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider