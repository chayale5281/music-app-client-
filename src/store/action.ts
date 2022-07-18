import { SongModel } from "../SongModel"

export const _addMySong = (newSong: SongModel) => {
    return {
        type: "ADD_SONG",
        payload: newSong
    }
}

export const _deletSong = (id: string) => {
    return {
        type: "DELETE_SONG",
        payload: id
    }
}

export const _editMySong = (editSong: SongModel) => {
    
    return {
        type: "EDIT_SONG",
        payload: editSong
    }
}


export const _getAllSong = (listSong: SongModel[]) => {
    return {
        type: "GET_SONG",
        payload: listSong
    }
}