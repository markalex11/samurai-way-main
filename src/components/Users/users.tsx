import React from "react";
import {UserType} from "../redux/users-reducer";

type UsersPropsType = {
    users: UserType[]
    follow: (usurId: number) => void
    unfollow: (usurId: number) => void
    setUsers: (users: UserType[]) => void
}
export const Users = (props: UsersPropsType) => {
if(props.users.length === 0) {
    props.setUsers([{id: 1, photoURL:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png', followed: false, name: "Alexandr", status: "rising", location: {city: 'Deep', country:"in my head"} },
        {id: 2, photoURL:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png', followed: true, name: "Maria", status: "work", location: {city: 'Briceni', country:"Moldova"} },
        {id: 3, photoURL:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png', followed: false, name: "Roman", status: "studying", location: {city: 'Chishinau', country:"Moldova"} }
    ])}

    return (
        <div>
            {props.users.map(u =>
                <div key={u.id} style={{maxHeight: "200px", display: "flex", width: "100%", gap: "50px"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <img style={{maxHeight: "150px", maxWidth: "150px"}} src={u.photoURL}/>
                        {
                            u.followed
                                ? <button onClick={()=>props.unfollow(u.id)} style={{maxHeight: "150px", maxWidth: "150px"}}>Unfollow</button>
                                : <button onClick={()=>props.follow(u.id)} style={{maxHeight: "150px", maxWidth: "150px"}}>follow</button>
                        }
                    </div>
                    <div style={{display: "flex", flexDirection: "row", gap: "200px"}}>
                        <div>
                            <h3>{u.name}</h3>
                            <h5>{u.status}</h5>
                        </div>
                        <div>
                            <h3>{u.location.country}</h3>
                            <h5>{u.location.city}</h5>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}