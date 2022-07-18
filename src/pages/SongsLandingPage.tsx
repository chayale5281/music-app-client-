
import { Button } from '@mui/material';
import SingleSong from "../components/singleSong";
import IconButton from '@mui/material/IconButton';
import { SongModel } from '../SongModel';
import { IoMdAddCircleOutline } from "react-icons/io"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchSong from "../components/SearchSong";


type Props = {
    listSong: SongModel[],
    getSongs: () => void,
    deleteSong: (idSong: string) => void,
    getbyArtist: (nameArtist: string) => void
}

const SongsLandingPage = ({ listSong, getSongs, deleteSong, getbyArtist }: Props) => {
   
    const nav = useNavigate();
    const [showButtonBack, setshowButtonBack] = useState<boolean>(false)
    const arrRecord: string[] = ["name", "artist", "price", ""]

    return (<>
        <h1>music app</h1>
        <SearchSong setshowButtonBack={setshowButtonBack} getbyArtist={getbyArtist} />
        <TableContainer component={Paper}>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>

                    <TableRow>
                        {arrRecord.map((record, index) => {
                            return (<TableCell sx={{ color: 'rgb(242,68,119)' }} key={index} align="center">{record}</TableCell>)
                        })}
                    </TableRow>
                </TableHead>

                {listSong.map((singleSong: SongModel) => {

                    return (

                        <SingleSong singleSong={singleSong} deleteSong={deleteSong} key={singleSong.id} />
                    )
                })}
            </Table>
        </TableContainer>
        {listSong.length === 0 && <h3>Sorry, no search details are available</h3>}
        <IconButton onClick={() => { nav("/songs/addSong") }}>

            <IoMdAddCircleOutline size={70} className="color-Button" />
        </IconButton>

        {showButtonBack && <Button variant="outlined" sx={{ m: 2, color: " rgb(242,68,119)" }} onClick={() => { getSongs(), setshowButtonBack(false) }}>back to all the songs</Button>}
    </>
    );

}


export default SongsLandingPage;

