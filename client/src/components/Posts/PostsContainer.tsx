import React from "react"
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import Posts from "./Posts";
import ActionCreators from '../../store/actionCreators/'
import {RootState} from "../../store/reducers";

const mapStateToProps = (state: RootState) => (
    {
        posts: state.post.posts,
        error: state.post.error,
        loading: state.post.loading,
        theme: state.theme.theme,
    }
)

const mapDispatchToProps = (dispatch: any) => {
    const boundActions = bindActionCreators(ActionCreators, dispatch)
    return {
        fetchPosts: boundActions.fetchPosts,
        likePost: boundActions.likePost,
        loadComments: boundActions.loadComments,
        dropPosts: boundActions.dropPosts,
    }
  }

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;