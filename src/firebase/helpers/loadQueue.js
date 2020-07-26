import { db } from "../firebaseConfig"

export const loadQueue = async () => {

    const snap = await db.collection(`queue`).get();

    const songs = [];

    snap.forEach( item => {
        songs.push({
            ...item.data()
        })
    });

    return songs;

}