import * as UserActionCreators from './userAC'
import * as PostActionCreators from './postAC'
import * as ProfileActionCreators from './profileAC'

export default {
    ...UserActionCreators,
    ...PostActionCreators,
    ...ProfileActionCreators
}
