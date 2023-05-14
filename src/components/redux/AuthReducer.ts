const SET_USER_DATA = "SET_USER_DATA"

type SetUserDataAT = ReturnType<typeof setAuthUserData>

type ActionTypes = SetUserDataAT

type initialStateType = {
    id: number
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState : initialStateType = {
    id: NaN,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: ActionTypes) => {
    switch (action.type){
        case 'SET_USER_DATA' :
            return {...state,...action.data,isAuth: true}
        default :
            return state
    }
}


export const setAuthUserData = (id: number, email: string | null, login: string | null ) => {
    return {type: SET_USER_DATA , data: {id,email,login}} as const
}