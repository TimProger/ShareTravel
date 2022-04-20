import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from '../store/actionCreators/'

// Создаю хук для получения любых AC
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
