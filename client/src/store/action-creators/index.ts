import * as UserActionCreators from './user'
import * as PostActionCreators from './post'
import * as ProfileActionCreators from './profile'

export default {
    ...UserActionCreators,
    ...PostActionCreators,
    ...ProfileActionCreators
}
