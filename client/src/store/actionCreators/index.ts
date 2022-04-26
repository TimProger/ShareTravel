import * as UserActionCreators from './userAC'
import * as PostActionCreators from './postAC'
import * as ProfileActionCreators from './profileAC'
import * as AuthActionCreators from './authAC'

// Объединяем все AC в объект и экспортируем их
export default {
    ...UserActionCreators,
    ...PostActionCreators,
    ...ProfileActionCreators,
    ...AuthActionCreators
}
