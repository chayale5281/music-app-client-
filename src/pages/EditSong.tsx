
import { Button, FormControl, Grid, MenuItem, Select, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios-by-ts';
import { Validate, ValidationGroup } from 'mui-validate';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { SongModel, typeGener } from '../SongModel';


type Props = {
    updateSong: (updateSong: SongModel) => void,
}
const EditSong = ({ updateSong }: Props) => {
    const navigation = useNavigate();
    const location = useLocation();
    const [editSong, seteditSong] = useState<SongModel>()

    useEffect(() => {
        async function getSongByIdFromServer() {
            const myId = location.state
            try {
                const response = await axios.get<SongModel>(`http://localhost:8080/songs/getById?myId=${myId}`)
                const myOldSong = response.data;

                seteditSong({
                    id: myOldSong.id,
                    title: myOldSong.title,
                    artist: myOldSong.artist,
                    length: myOldSong.length,
                    price: myOldSong.price,
                    myGenre: myOldSong.myGenre
                })

            }
            catch (e) {
                console.log(e)
            }
        }
        getSongByIdFromServer();
    }, [])


    return (
        <>
            <h1>edit song</h1>

            {editSong && <ValidationGroup>
                <FormControl variant="standard" sx={{ m: 5, minWidth: 200, }} >

                    <Grid item xs={12} sm={6}>
                        <Validate name="internal key 1" required={[true, 'titel song is a required field']}>

                            <TextField id="standard-basic" sx={{ m: 2, input: { color: ' rgb(242,68,119)' } }} label="title of song" variant="standard" defaultValue={editSong.title} onChange={(val) => { seteditSong({ ...editSong, title: val.target.value }) }} />
                        </Validate>
                        <Validate name="internal key 2" required={[true, 'name artist is a required field']}>
                            <TextField id="standard-basic" sx={{ m: 2, input: { color: ' rgb(242,68,119)' } }} label="name artist" variant="standard" defaultValue={editSong.artist} onChange={(val) => { seteditSong({ ...editSong, artist: val.target.value }) }} />
                        </Validate>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Validate name="internal key 3" required={[true, 'length song is a required field']}>
                            <TextField id="standard-basic" sx={{ m: 2, input: { color: ' rgb(242,68,119)' } }} label="length of song" type="number" defaultValue={editSong.length} variant="standard" onChange={(val) => { seteditSong({ ...editSong, length: parseFloat(val.target.value) }) }} />
                        </Validate>
                        <Validate name="internal key 4" required={[true, 'price is a required field']}>
                            <TextField id="standard-basic" sx={{ m: 2, input: { color: ' rgb(242,68,119)' } }} label="price" variant="standard" defaultValue={editSong.price} onChange={(val) => { seteditSong({ ...editSong, price: parseFloat(val.target.value) }) }} />
                        </Validate>
                    </Grid>

                    <Typography variant="body1" display="block" gutterBottom sx={{ mr: 27, mt: 1 }}>
                        Select the genre type of song
                    </Typography>
                    <Select sx={{ m: 2, color: ' rgb(242,68,119)' }} labelId="demo-simple-select-filled-label" defaultValue={editSong.myGenre} value={editSong.myGenre} onChange={(v) => { seteditSong({ ...editSong, myGenre: v.target.value }) }}
                    >
                        {typeGener.map((item, key) =>
                            <MenuItem sx={{ color: " rgb(242,68,119)" }} key={key} value={item} >{item}</MenuItem>
                        )}
                    </Select>

                    {/* <AutoDisabler> */}
                    <Button variant="outlined" sx={{ m: 2, color: " rgb(242,68,119)" }} onClick={() => { updateSong(editSong), navigation("/") }}>update song</Button>
                    {/* </AutoDisabler> */}
                    <BackButton />
                </FormControl >

            </ValidationGroup>}
        </>

    )
}
export default EditSong;