const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"

type FollowAT = {
    type: "FOLLOW",
    userId: number
}
type UnFollowAT = {
    type: "UNFOLLOW",
    userId: number
}
type SetUsersAT = {
    type: "SET-USERS"
    users: UserType[]
}

export type UserType = {
    id: number
    photos: {small:string ,large : string}
    followed: boolean
    name: string
    status: string
    uniqueUrlName : string
    // location: { city: string, country: string }
}


type InitialStateType = {
    users: UserType[]
}


const initialState: InitialStateType = {
    users: [
        // {id: 1, photoURL:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png', followed: false, name: "Alexandr", status: "rising", location: {city: 'Deep', country:"in my head"} },
        // {id: 2, photoURL:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png', followed: true, name: "Maria", status: "work", location: {city: 'Briceni', country:"Moldova"} },
        // {id: 3, photoURL:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png', followed: false, name: "Roman", status: "studying", location: {city: 'Chishinau', country:"Moldova"} }
        //
    ]
}

export const usersReducer = (state: InitialStateType = initialState, action: FollowAT | UnFollowAT | SetUsersAT): InitialStateType => {
    switch (action.type) {
        case FOLLOW :
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case UNFOLLOW :
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default :
            return state
    }
}

export const followAC = (userId: number): FollowAT => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unFollowAC = (userId: number): UnFollowAT => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export const setUsersAC = (users: UserType[]): SetUsersAT => {
    return {
        type: SET_USERS,
        users: users
    }
}