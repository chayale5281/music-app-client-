import { Route, Routes } from "react-router-dom";
import SongsLandingPage from './pages/SongsLandingPage';
import AddSong from './pages/AddSong';
import EditSong from './pages/EditSong';
import { useEffect } from "react";
import { SongModel } from "./SongModel";
import { useDispatch, useSelector } from "react-redux";
import { redurSong } from "./store/reducer";
import { addnewSongThunk, deleteSongThunk, getAllSongThunk, getSongByArtistThunk, updateSongThunk } from "./api/songApi";
import type { } from 'redux-thunk/extend-redux'


const SongsShop = () => {
    const listSong: SongModel[] = useSelector((state: any) => state.songReducer.listSong);
    // const listSong: SongModel[] = useSelector((state: redurSong) => state.songReducer.listSong);
    const dis = useDispatch();

    const getSongs = () => {

        dis(getAllSongThunk());
    }

    const addSong = (newSong: SongModel) => {

        dis(addnewSongThunk(newSong));
    }

    const deleteSong = (idSong: string) => {

        dis(deleteSongThunk(idSong));
    }

    const updateSong = (updateSong: SongModel) => {
        
        dis(updateSongThunk(updateSong));
       
    
    }
    const getbyArtist = (nameArtist: string) => {

        dis(getSongByArtistThunk(nameArtist))
    }

    useEffect(() => {
        getSongs();
    }, [])


    return (

        <Routes>
            <Route path="/" element={<SongsLandingPage listSong={listSong} getSongs={getSongs} deleteSong={deleteSong} getbyArtist={getbyArtist} />} />
            <Route path="/songs/addSong" element={<AddSong addSong={addSong} />} />
            <Route path="/songs/editSong" element={<EditSong updateSong={updateSong} />} />
        </Routes>
    )
}

export default SongsShop;
