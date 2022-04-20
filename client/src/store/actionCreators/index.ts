import * as UserActionCreators from './userAC'
import * as PostActionCreators from './postAC'
import * as ProfileActionCreators from './profileAC'

// Объединяем все AC в объект и экспортируем их
export default {
    ...UserActionCreators,
    ...PostActionCreators,
    ...ProfileActionCreators
}
