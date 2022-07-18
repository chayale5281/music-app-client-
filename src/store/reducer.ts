import { SongModel } from "../SongModel";

export interface redurSong {

    listSong: SongModel[];
}
type Action =
    | { type: "ADD_SONG", payload: SongModel }
    | { type: "DELETE_SONG", payload: string }
    | { type: "EDIT_SONG", payload: SongModel }
    | { type: "GET_SONG", payload: SongModel[] }

const initialization: redurSong =
{
    listSong: []
}

export const songReducer = (state: redurSong = initialization, action: Action) => {

    switch (action.type) {
        case "ADD_SONG":

            return {
                ...state,
                listSong: [...state.listSong, action.payload]
            }

        case "DELETE_SONG":
            return {
                ...state,
                listSong: state.listSong.filter((song: SongModel) => song.id !== action.payload)
            }

        case "EDIT_SONG":
            return {
                ...state,
                listSong: [...state.listSong.map((song: SongModel) => { return (song.id === action.payload.id ? action.payload : song) })]           
             
            }

        case "GET_SONG":

            return {

                ...state,
                listSong: [...action.payload]
            }

        default: return { ...state }

    }

}
