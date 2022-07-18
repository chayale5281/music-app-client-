import { IconButton } from "@mui/material";
import {IoArrowBackCircle} from "react-icons/io5"
import { useNavigate } from "react-router-dom"
const BackButton=()=>
{
    const navi=useNavigate();
return(
    <IconButton onClick={()=>{navi("/")}}>
        <IoArrowBackCircle size={100}  className="color-Button" />
    </IconButton>
)
}
export default BackButton;