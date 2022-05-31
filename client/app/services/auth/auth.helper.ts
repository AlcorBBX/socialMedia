import Cookies from "js-cookie";

export type TypeUser = {
    _id: string
    email: string
} | null

export interface IAuthData {
    user: TypeUser
    accessToken: string
}
// получение токена в куки
export const saveTokenToStorage = (accessToken: string) => {
    Cookies.set('accessToken', accessToken)
}
// удаление токена из кук
export const removeTokenFromStorage = () => {
    Cookies.remove('accessToken')
}
// записывание токена в куки и пользователя в стор
export const saveToStorage = (data: IAuthData) => {
    saveTokenToStorage(data.accessToken)
    localStorage.setItem('user', JSON.stringify(data.user))
}