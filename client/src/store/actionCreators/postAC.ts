import {IPost, PostAction, PostActionTypes} from "../../types/postType";
import {Dispatch} from "redux";
import axios from 'axios';
import {UserActionTypes} from "../../types/userType";
import {IApiUsersResponseData} from "../../types/httpTypes";
import {getData} from "../../http/fetch";

// AC который в начале начинает загрузку постов при помощи FETCH_POSTS
// А затем обращается за ними на сервер
// и при помощи FETCH_POSTS_SUCCESS передаёт их в хранилище (store)
export const fetchPosts = (page: number = 1) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionTypes.FETCH_POSTS})
            // Типы, которые мы задаём в дженерике относятся не к самому объекту ответа, а лишь к его полю data
            getData(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
                .then(response => {
                    // Response -> data -> results
                    // Response -> data от axios -> results от api -> массив пользователей
                    dispatch({
                        type: PostActionTypes.FETCH_POSTS_SUCCESS,
                        payload: response.results
                    })
                }).catch(e => {
                    dispatch({
                        type: PostActionTypes.FETCH_POSTS_ERROR,
                        payload: 'Произошла ошибка при запросе к серверу' + e
                    })
                }
            )
        } catch (e) {
            dispatch({
                type: PostActionTypes.FETCH_POSTS_ERROR,
                payload: 'Произошла ошибка при загрузке постов'
            })
        }
    }
}

// AC с типом LIKE_POST и с айдишником поста
export const likePost = (id: number) => {
    return async (dispatch: Dispatch<PostAction>) => {
        dispatch({
            type: PostActionTypes.LIKE_POST,
            payload: id
        })
    }
}

// AC с типом LIKE_POST и с айдишником поста
export const dropPosts = () => {
    return async (dispatch: Dispatch<PostAction>) => {
        dispatch({type: PostActionTypes.DROP_POSTS,})
    }
}

//
export const loadComments = (id: number) => {
    return async (dispatch: Dispatch<PostAction>) => {
        dispatch({type: PostActionTypes.FETCH_COMMENTS})
        dispatch({
            type: PostActionTypes.LOAD_COMMENTS,
            id: id,
            payload: [
                {
                    id: 1,
                    uid: 3,
                    name: "Steven",
                    surname: 'Armstrong',
                    text: 'Yo.',
                    likes: 0
                }
            ]
        })
    }
}
