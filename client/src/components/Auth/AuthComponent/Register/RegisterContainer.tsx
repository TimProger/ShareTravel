import React from "react";
import Register from "./Register";
import ActionCreators from '../../../../store/actionCreators/'
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import {RootState} from "../../../../store/reducers";

const mapStateToProps = (state: RootState) => (
    {
    error: state.auth.error,
    theme: state.theme.theme,
  })

const mapDispatchToProps = (dispatch: any) => {
    const boundActions = bindActionCreators(ActionCreators, dispatch)
    return {
        register: boundActions.register,
    }
  }

let RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterContainer;