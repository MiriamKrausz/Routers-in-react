import {useParams} from "react-router-dom";
// import PersonFromContext from "../PersonFromContext/PersonFromContext";
import { useContext } from "react";
import { namesContext } from "../../App";
function SinglePerson(){
    const {personsId}=useParams();
    const persons=useContext(namesContext)
    return
    <>
    {persons[personsId]}
    </>
}
export default SinglePerson
