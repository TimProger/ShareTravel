import {IPost, PostAction, PostActionTypes} from "../../types/postType";
import {Dispatch} from "redux";
import axios, {AxiosResponse} from 'axios';

// AC который в начале начинает загрузку постов при помощи FETCH_POSTS
// А затем обращается за ними на сервер
// и при помощи FETCH_POSTS_SUCCESS передаёт их в хранилище (store)
export const fetchPosts = (page: number = 1) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionTypes.FETCH_POSTS})
            axios.get<AxiosResponse<IPost[]>>(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
                .then(response=>{
                    dispatch({
                        type: PostActionTypes.FETCH_POSTS_SUCCESS,
                        // @ts-ignore
                        // По неведомым причинам он ругается на тип входящих данных
                        payload: response.data
                    })
                }).catch(e => {
                    dispatch({
                        type: PostActionTypes.FETCH_POSTS_ERROR,
                        payload: 'Произошла ошибка при загрузке постов'
                    })
                }
            )
            // fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
            //     .then(response => response.json())
            //     .then(json => {
            //         dispatch({
            //             type: PostActionTypes.FETCH_POSTS_SUCCESS,
            //             payload: json
            //         })
            //     }).catch(e => {
            //             dispatch({
            //                 type: PostActionTypes.FETCH_POSTS_ERROR,
            //                 payload: 'Произошла ошибка при загрузке постов'
            //             })
            //         }
            //     )
            // setTimeout(()=>(dispatch({
            //     type: PostActionTypes.FETCH_POSTS_SUCCESS,
            //     payload: [
            //         {
            //             id: 0,
            //             uid: 1,
            //             avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
            //             text: 'What a good network',
            //             likes: 18,
            //             liked: false,
            //             name: 'Tim',
            //             surname: 'Timmsky',
            //             comments: [],
            //             totalComments: 0
            //         },
            //         {
            //             id: 1,
            //             uid: 2,
            //             avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
            //             text: 'Yo dudes',
            //             likes: 0,
            //             liked: false,
            //             name: 'Bob',
            //             surname: 'Luminsky',
            //             comments: [],
            //             totalComments: 0
            //         },
            //         {
            //             id: 2,
            //             uid: 3,
            //             avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
            //             text: 'Nice knife, Jack.',
            //             image: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
            //             likes: 231312,
            //             liked: false,
            //             name: 'Steven',
            //             surname: 'Armstrong',
            //             comments: [],
            //             totalComments: 0
            //         }
            //     ]
            // })), 10)
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
