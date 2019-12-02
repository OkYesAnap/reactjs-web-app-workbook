import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import React from 'react';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};


function SignInWithGoogle(props) {

    const {
        user,
        signOut,
        signInWithGoogle,
    } = props;
    return (
        <div className="login-wrapper">
            {
                user
                    ? <p>Hello, {user.displayName}</p>
                    : <p>Please sign in.</p>
            }
            {
                user
                    ? <button onClick={signOut}>Sign out</button>
                    : <button onClick={signInWithGoogle}>Sign in with Google</button>
            }
            <div>
            </div>
        </div>
    )
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(SignInWithGoogle);
