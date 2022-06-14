import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import './Followers.css'
import Followers from "./Followers";
import ActionCreators from '../../store/actionCreators/'
import {RootState} from "../../store/reducers";

const mapStateToProps = (state: RootState) => (
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
      fetchUsers: boundActions.fetchUsers,
      dropUsers: boundActions.dropUsers,
    }
  }

let FollowersContainer = connect(mapStateToProps, mapDispatchToProps)(Followers);
export default FollowersContainer;
