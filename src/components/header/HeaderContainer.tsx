import React from "react";
import Header from "./header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {setAuthUserData} from "../redux/AuthReducer";


class HeaderApiContainer extends React.Component<HeaderContainerPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true})
            //обьект withCredentials: true передается вторым параметров чтобы куки пошли для авторизации на сервер
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {email, id , login} = response.data.data
                    //сверху деструктуризация
                    this.props.setAuthUserData(id,email,login)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string | null, login: string | null ) => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    } as MapStateToPropsType
}

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderApiContainer)

