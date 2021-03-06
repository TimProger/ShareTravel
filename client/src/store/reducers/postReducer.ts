import {PostAction, PostActionTypes, IPostState} from "../../types/postType";

const initialState: IPostState = {
    posts: [],
    loading: true, // Ни в коем случае не переводить в false.
    error: null
}

export const postReducer = (state: IPostState = initialState, action: PostAction): IPostState => {
    switch (action.type) {
        case PostActionTypes.FETCH_COMMENTS:
            return {...state, loading: false, error: null}
        case PostActionTypes.LOAD_COMMENTS:
            return {...state, loading: false, error: null, posts: state.posts.map(post=>{
                    if(post.id === action.id){
                        return {...post, comments: [...action.payload], totalComments: action.payload.length}
                    }
                    return post
                })}
        case PostActionTypes.LIKE_POST:
            return {...state, loading: false, error: null, posts: state.posts.map(post=>{
                    if(post.id === action.payload){
                        if(post.liked){
                            return {...post, likes: post.likes-1, liked: false}
                        }
                        return {...post, likes: post.likes+1, liked: true}
                    }
                    return post
                })}
        case PostActionTypes.FETCH_POSTS:
            return {loading: true, error: null, posts: state.posts}
        case PostActionTypes.DROP_POSTS:
            return {loading: true, error: null, posts: []}
        case PostActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, loading: false, error: null, posts: [...state.posts, ...action.payload]}
        case PostActionTypes.FETCH_POSTS_ERROR:
            return {...state, loading: false, error: action.payload, posts: state.posts}
        default:
            return state
    }
}
