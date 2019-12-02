import firebase from 'firebase';

export const getCharacters = (setChars) =>
    firebase.database().ref().once('value',
        (snapshot) => (setChars(snapshot.val())))
