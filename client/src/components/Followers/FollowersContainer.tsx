import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import './Followers.css'
import Followers from "./Followers";
import ActionCreators from '../../store/actionCreators/'


const mapStateToProps = (state: any) => (
    {
    follows: state.user.follows,
    followers: state.user.followers,
    error: state.user.error,
    loading: state.user.loading,
    theme: state.theme.theme,
  })

const mapDispatchToProps = (dispatch: any) => {
    const boundActions = bindActionCreators(ActionCreators, dispatch)
    return {
      // dispatching plain actions
      fetchUsers: boundActions.fetchUsers,
      dropUsers: boundActions.dropUsers,
    }
  }

let FollowersContainer = connect(mapStateToProps, mapDispatchToProps)(Followers);
export default FollowersContainer;
