import { firebase } from 'firebase/app';

export const loadQueue = async () => {

    const snap = firebase.database().ref('queue');

    const songs = [];

    snap.forEach( item => {
        songs.push({
            ...item.data()
        })
    });

    return songs;

}