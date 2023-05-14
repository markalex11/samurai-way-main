import React from "react";
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {setUserProfile} from "../redux/Profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";




class ProfileApiContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

type MapStateToPropsReturnType = {
     profile: any
}
type MapDispatchToPropsReturnType = {
    setUserProfile: (profile: any) => void
}
type OwnPropsType = MapStateToPropsReturnType & MapDispatchToPropsReturnType

type PathParamsType = {
     userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType



const mapStateToProps = (state:AppStateType): MapStateToPropsReturnType => {
     return {
         profile: state.profilePage.profile
     }
}

let ProfileApiContainerWithUrlData = withRouter(ProfileApiContainer)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileApiContainerWithUrlData)