import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { types } from './../types/types';

export const startGoogleLogin = ()=> {

    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider ).then( ({user}) => {
            dispatch(
                login( user.uid, user.photoURL, user.displayName)
            )
        })
    }
}

export const login = (uid, photo, displayName) => ({

    type: types.login,
    payload: {
        uid,
        photo,
        displayName
    }

})