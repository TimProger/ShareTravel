import React from "react"
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import Profile from "./Profile";
import ActionCreators from '../../store/actionCreators/'
import {RootState} from "../../store/reducers";

const mapStateToProps = (state: RootState) => (
    {
    profile: state.profile.profile,
    error: state.profile.error,
    loading: state.profile.loading,
    theme: state.theme.theme,
  })

const mapDispatchToProps = (dispatch: any) => {
    const boundActions = bindActionCreators(ActionCreators, dispatch)
    return {
      fetchProfile: boundActions.fetchProfile,
      dropProfile: boundActions.dropProfile,
    }
  }

let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;