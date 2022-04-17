import {PostAction, PostActionTypes} from "../../types/post";
import {Dispatch} from "redux";

export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionTypes.FETCH_POSTS})
            fetch('https://jsonplaceholder.typicode.com/posts/')
                .then(response => response.json())
                .then(json => dispatch({
                    type: PostActionTypes.FETCH_POSTS_SUCCESS,
                    payload: json
                })).catch(e => dispatch({
                        type: PostActionTypes.FETCH_POSTS_ERROR,
                        payload: 'Произошла ошибка при загрузке постов'
                    })
                )
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
            // })), 5000)
        } catch (e) {
            dispatch({
                type: PostActionTypes.FETCH_POSTS_ERROR,
                payload: 'Произошла ошибка при загрузке постов'
            })
        }
    }
}

export const likePost = (id: number) => {
    return async (dispatch: Dispatch<PostAction>) => {
        dispatch({
            type: PostActionTypes.LIKE_POST,
            payload: id
        })
    }
}


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
