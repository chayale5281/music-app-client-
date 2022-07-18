import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

type Props = {
  setshowButtonBack: React.Dispatch<React.SetStateAction<boolean>>,
  getbyArtist: (nameArtist: string) => void

}
const SearchSong = ({ setshowButtonBack, getbyArtist }: Props) => {

  const [nameArtist, setNameArtist] = useState<string>('')
  const getSongByArrtist = (e: any) => {
    e.preventDefault()
    getbyArtist(nameArtist)
    setshowButtonBack(true);
  }

  return (
    <>

      <Paper
        component="form"
        sx={{ p: '2px 2px', display: 'inline-flex', alignItems: 'center', width: 200 }}
        color='action'
        onSubmit={getSongByArrtist}
      >

        <InputBase
          sx={{ ml: 1, flex: 1, input: { color: ' rgb(242,68,119)' } }}
          placeholder="Enter Artist Name"
          inputProps={{ nameArtist }}
          onChange={(v) => { setNameArtist(v.target.value) }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>

      </Paper>

    </>
  )
}
export default SearchSong;