const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT =  "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

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
type SetCurrentPageAT = {
    type: "SET-CURRENT-PAGE"
    pageNumber: number
}
type SetTotalUsersCountAT = {
    type:"SET_TOTAL_USERS_COUNT"
    count: number
}
type ToggleIsFetchingAT = {
    type: "TOGGLE-IS-FETCHING"
    isFetching: boolean
}
type ToggleIsFollowingProgressAT = ReturnType<typeof toggleIsFollowingProgress>

type ActionTypes = FollowAT |
    UnFollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT| ToggleIsFetchingAT | ToggleIsFollowingProgressAT




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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingProgress: number[]
}


const initialState: InitialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: []

}

export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW :
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case UNFOLLOW :
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case SET_USERS:
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state,currentPage: action.pageNumber}
        case "SET_TOTAL_USERS_COUNT":
            return {...state,totalUsersCount:action.count}
        case "TOGGLE-IS-FETCHING":
            return {...state,isFetching: action.isFetching }
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {...state,isFollowingProgress:
            action.isProgress
                ? [...state.isFollowingProgress,action.userId]
                : state.isFollowingProgress.filter(el => el !== action.userId)
            }
        default :
            return state
    }
}

export const follow = (userId: number): FollowAT => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unFollow = (userId: number): UnFollowAT => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export const setUsers = (users: UserType[]): SetUsersAT => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const setCurrentPage = (pageNumber:number): SetCurrentPageAT => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber: pageNumber
    }
}

export const setTotalUsersCount = (count: number): SetTotalUsersCountAT => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count : count
    }

}

export const toggleIsFetching = (isFetching:boolean): ToggleIsFetchingAT => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching:isFetching
    }
}

export const toggleIsFollowingProgress = (userId: number, isProgress: boolean) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        userId: userId,
        isProgress: isProgress
    } as const
}