
import axios from "axios-by-ts"
import { SongModel } from "../SongModel";
import { _addMySong, _deletSong, _editMySong, _getAllSong } from "../store/action";

export const getAllSongThunk = () => {
    return async (dispatch: any) => {
        try {
            const result = await axios.get<SongModel[]>('http://localhost:8080/songs/allSong');
            dispatch(_getAllSong(result.data))
        }
        catch (err) {
            return err
        }

    }
}

export const addnewSongThunk = (newSong: SongModel) => {
    return async (dispatch: any) => {
        try {
            const result = await axios({ url: `http://localhost:8080/songs/addSong`, method: 'POST', data: newSong })
            dispatch(_addMySong(result.data))
        }

        catch (e) {
            alert(e);
            return e;
        }
    }
}

export const deleteSongThunk = (id: string) => {
    return async (dispatch: any) => {
        try {
            const result = await axios({ url: `http://localhost:8080/songs/deleteSong?myid=${id}`, method: 'DELETE' });
            dispatch(_deletSong(id))
        }
        catch (e) {

            alert(e)
            return e;
        }
    }
}
export const updateSongThunk = (updateSong: SongModel) => {
    return async (dispatch: any) => {
        try {
            const result = await axios({ url: `http://localhost:8080/songs/updateSong`, method: 'PUT', data: updateSong })
            
            dispatch(_editMySong(result.data));
        }
        catch (e) {

            console.log(e)
            return e;
        }
    }

}
export const getSongByArtistThunk = (nameArtist: string) => {
    return async (dispatch: any) => {
        try {
            const result = await axios.get(`http://localhost:8080/songs/byArtist?myArtist=${nameArtist}`)

            dispatch(_getAllSong(result.data))

        }
        catch (r) {
            alert(r);
            return r;
        }
    }

}


