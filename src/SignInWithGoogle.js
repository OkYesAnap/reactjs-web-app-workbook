import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import React from 'react';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};


class SignInWithGoogle extends React.Component {
    write(){
        return firebase.database().ref().once('value', (spapshot)=>console.error(spapshot.val()))         
    }

    render() {


        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;
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
              <div><button onClick={this.write}>Show characters</button></div>
            </div>
        );
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(SignInWithGoogle);
