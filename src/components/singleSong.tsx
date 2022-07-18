import './singleSong.style.css'
import IconButton from '@mui/material/IconButton';
import { SongModel } from '../SongModel';
import { useNavigate } from 'react-router-dom';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { FiEdit } from "react-icons/fi"
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';

type Props = {
  singleSong: SongModel,
  deleteSong: (idSong: string) => void
}

const SingleSong = ({ singleSong, deleteSong }: Props) => {

  const navigate = useNavigate();
  const [songdeteils, setSongdeteils] = useState<any[]>([singleSong.title, singleSong.artist, singleSong.price]);
  useEffect(() => {
    setSongdeteils([singleSong.title, singleSong.artist, singleSong.price])
  }, [songdeteils])
  const editSong = () => {

    navigate("/songs/editSong", { state: singleSong.id })
  }
  return (
    <>
      <TableBody>
        {

          <TableRow
            key={singleSong.title}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className="TableRow"
          >
            {
              songdeteils.map((i: any[], index) => {
                return (
                  <TableCell align="center" key={index}>{i}</TableCell>

                )
              })

            }

            <IconButton onClick={editSong}>
              <FiEdit />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => { deleteSong(singleSong.id ? singleSong.id : '0') }}>
              <DeleteIcon />
            </IconButton>
          </TableRow>
        }
      </TableBody>
    </>

  );
}
export default SingleSong;
