// Файл с типами постов и экшенов связанных с ними

interface IComment {
    id: number;
    uid: number;
    name: string;
    surname: string;
    text: string;
    image?: string;
    likes: number;
}

export interface IPost {
    id: number;
    uid: number;
    avatar: string;
    text?: string;
    image?: string;
    likes: number;
    liked: boolean;
    name: string;
    surname: string;
    comments: IComment[] | [];
    totalComments: number;
}

export interface IPostState {
    posts: IPost[] | any[]; // Убрать any[] после подключения бд
    loading: boolean;
    error: null | string;
}

export enum PostActionTypes {
    DROP_POSTS = 'DROP_POSTS',
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    LIKE_POST = 'LIKE_POST',
    LOAD_COMMENTS = 'LOAD_COMMENTS',
    FETCH_COMMENTS = 'FETCH_COMMENTS',
}

interface ILoadCommentsAction {
    type: PostActionTypes.LOAD_COMMENTS;
    id: number;
    payload: IComment[];
}

interface ILikePostAction {
    type: PostActionTypes.LIKE_POST;
    payload: number;
}

interface IFetchPostsAction {
    type: PostActionTypes.FETCH_POSTS;
}

interface IDropPostsAction {
    type: PostActionTypes.DROP_POSTS;
}

interface IFetchCommentsAction {
    type: PostActionTypes.FETCH_COMMENTS;
}

interface IFetchPostsSuccessAction {
    type: PostActionTypes.FETCH_POSTS_SUCCESS;
    payload: IPost[] | any[]
}

interface IFetchPostsErrorAction {
    type: PostActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

export type PostAction = ILikePostAction
    | IDropPostsAction
    | IFetchCommentsAction
    | ILoadCommentsAction
    | IFetchPostsAction
    | IFetchPostsSuccessAction
    | IFetchPostsErrorAction


export interface IPostsProps {
    fetchPosts: (id: number) => void;
    likePost: (id: number) => void;
    loadComments: (id: number) => void;
    dropPosts: () => void;
    posts: IPost[] | any[];
    error: null | string;
    loading: boolean;
    theme:string;

}

export interface IPostProps {
    likePost: (id: number) => void;
    loadComments: (id: number) => void;
    post: IPost | any;
    theme:string;
}
