import React from 'react';
import './Followers.css'
import {bindActionCreators} from "redux";
import Followers from "./Followers";
import ActionCreators from '../../store/actionCreators/'
import { connect } from "react-redux";


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

// export default FollowersContainer;
let FollowersContainer = connect(mapStateToProps, mapDispatchToProps)(Followers);
export default FollowersContainer;
