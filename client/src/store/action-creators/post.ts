import {PostAction, PostActionTypes} from "../../types/post";
import {Dispatch} from "redux";
import {UserActionTypes} from "../../types/user";

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
