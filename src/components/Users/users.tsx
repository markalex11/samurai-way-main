import React from "react";
import userPhoto from "../../assets/images/user.png";
import axios from "axios";
import {UsersPropsType} from "./usersContainer";

export class Users extends React.Component<UsersPropsType, any> {
   //метод который внизу автоматически вызывается реактом при первой отрисовке классовой компоненты
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0//users").then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return (
            <div>
                {this.props.users.map(u =>
                    <div key={u.id} style={{maxHeight: "200px", display: "flex", width: "100%", gap: "50px"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <img style={{maxHeight: "150px", maxWidth: "150px"}}
                                 src={u.photos.small ? u.photos.small : userPhoto}/>
                            {
                                u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)}
                                              style={{maxHeight: "150px", maxWidth: "150px"}}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}
                                              style={{maxHeight: "150px", maxWidth: "150px"}}>follow</button>
                            }
                        </div>
                        <div style={{display: "flex", flexDirection: "row", gap: "200px"}}>
                            <div>
                                <h3>{u.name}</h3>
                                <h5>{u.status}</h5>
                            </div>
                            <div>
                                <h3>{"u.location.country"}</h3>
                                <h5>{"u.location.city"}</h5>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}