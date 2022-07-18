
import { Button, Grid, MenuItem, Select, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { SongModel, typeGener } from '../SongModel';
import { FormControl } from '@mui/material';
import { AutoDisabler, Validate, ValidationGroup } from 'mui-validate';
type Props = {
    addSong: (newSong: SongModel) => void
}

export default function AddSong({ addSong }: Props) {
    const [newSong, setNewSong] = useState<SongModel>({
        title: "",
        artist: "",
        length: 0,
        price: 0,
        myGenre: "",

    })
    const navi = useNavigate();

    return (
        <>
            <h2>add song</h2>

            <ValidationGroup>
                <FormControl variant="standard" sx={{ m: 5, minWidth: 200, }} >

                    <Grid item xs={12} sm={6}>
                        <Validate name="internal key 1" required={[true, 'titel song is a required field']}>
                            <TextField id="standard-basic" sx={{ m: 2, input: { color: ' rgb(242,68,119)' } }} label="title of song" variant="standard" onChange={(val) => { setNewSong({ ...newSong, title: val.target.value }) }} />
                        </Validate>
                        <Validate name="internal key 2" required={[true, 'name artist is a required field']}>
                            <TextField id="standard-basic" sx={{ m: 2, input: { color: ' rgb(242,68,119)' } }} label="name artist" variant="standard" onChange={(val) => { setNewSong({ ...newSong, artist: val.target.value }) }} />
                        </Validate>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Validate name="internal key 3" required={[true, 'length song is a required field']}>
                            <TextField id="standard-basic" sx={{ m: 2, input: { color: ' rgb(242,68,119)' } }} label="length of song" type="number" variant="standard" onChange={(val) => { setNewSong({ ...newSong, length: parseFloat(val.target.value) }) }} />
                        </Validate>
                        <Validate name="internal key 4" required={[true, 'price is a required field']}>
                            <TextField id="standard-basic" sx={{ m: 2, input: { color: ' rgb(242,68,119)' } }} label="price" type="number" variant="standard" onChange={(val) => { setNewSong({ ...newSong, price: parseFloat(val.target.value) }) }} />
                        </Validate>
                    </Grid>

                    <Typography variant="body1" display="block" gutterBottom sx={{ mr: 27, mt: 1 }}>
                        Select the genre type of song
                    </Typography>


                    <Select sx={{ m: 2, color: ' rgb(242,68,119)' }} labelId="demo-simple-select-filled-label" value={newSong.myGenre} onChange={(v) => { setNewSong({ ...newSong, myGenre: v.target.value }) }}
                    >
                        {typeGener.map((item, key) =>
                            <MenuItem sx={{ color: " rgb(242,68,119)" }} key={key} value={item} >{item}</MenuItem>
                        )}
                    </Select>

                    <AutoDisabler>
                        <Button variant="outlined" sx={{ m: 2, color: " rgb(242,68,119)" }} onClick={() => { addSong(newSong), navi("/") }}>add your song</Button>
                    </AutoDisabler>
                    <BackButton />

                </FormControl>
            </ValidationGroup>
        </>
    )
}

