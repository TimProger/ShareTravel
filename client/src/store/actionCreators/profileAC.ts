import {ProfileAction, ProfileActionTypes} from "../../types/profileType";
import {Dispatch} from "redux";

export const fetchProfile = (id: string) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({type: ProfileActionTypes.FETCH_PROFILE})
            fetch('https://jsonplaceholder.typicode.com/users/' + id)
                .then(response => response.json())
                .then(json => {
                    dispatch({
                        type: ProfileActionTypes.FETCH_PROFILE_SUCCESS,
                        payload: json
                    })
                }).catch(e => dispatch({
                    type: ProfileActionTypes.FETCH_PROFILE_ERROR,
                    payload: 'Произошла ошибка при поиске профиля: ' + e
                })
            )
            // setTimeout(()=> {
            //     const users = [
            //         {
            //             id: 0,
            //             avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
            //             name: 'Tim',
            //             surname: 'Timmsky',
            //             text: 'What a good network',
            //             email: '1email1@mail.ru',
            //             age: 23
            //         },
            //         {
            //             id: 1,
            //             avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
            //             name: 'Bob',
            //             surname: 'Luminsky',
            //             text: 'Yo dudes',
            //             email: '2email2@mail.ru',
            //             age: 51
            //         },
            //         {
            //             id: 2,
            //             avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
            //             name: 'Steven',
            //             surname: 'Armstrong',
            //             text: 'Nice knife, Jack.',
            //             email: '3email3@mail.ru',
            //             age: 42
            //         }
            //     ]
            //     const user = users.find(user=>user.id === +id)
            //     dispatch({
            //         type: ProfileActionTypes.FETCH_PROFILE_SUCCESS,
            //         payload: user
            //     })
            // }, 10)

        } catch (e) {
            dispatch({
                type: ProfileActionTypes.FETCH_PROFILE_ERROR,
                payload: 'Произошла ошибка при поиске профиля'
            })
        }
    }
}

export const dropProfile = (id: string) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
            dispatch({type: ProfileActionTypes.DROP_PROFILE})
    }
}
