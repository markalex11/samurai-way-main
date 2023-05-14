import axios from "axios";


// const getInstance = axios.create({
//     baseURL: "https://social-network.samuraijs.com/api/1.0/",
//     withCredentials: true
// })

const Instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "1b889ad5-b57e-42f7-b53c-ec36c5194f85"}
})


//сверху вместо того чтобы каждый раз прописывать аксиос запрос мы делаем его шаблон и вызываем его


export const usersApi = {
    getUsers  (currentPage:number,pageSize: number ) {
        return Instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUser (userId: number) {
        return Instance.post(`follow/${userId}`)
    },
    unfollowUser (userId: number) {
        return Instance.delete(`follow/${userId}`)
    }
}

