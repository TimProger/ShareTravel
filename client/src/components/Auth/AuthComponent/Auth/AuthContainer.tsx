import React from "react";
import Auth from "./Auth";
import ActionCreators from '../../../../store/actionCreators/'
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import {RootState} from "../../../../store/reducers";

const mapStateToProps = (state: RootState) => (
    {
    theme: state.theme.theme,
  })

const mapDispatchToProps = (dispatch: any) => {
    const boundActions = bindActionCreators(ActionCreators, dispatch)
    return {
        login: boundActions.login,
    }
  }

let AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default AuthContainer;
