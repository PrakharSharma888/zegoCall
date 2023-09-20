import React, {useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
const HomePage = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState('');

    const handJoin = useCallback(() => {
        navigate(`/room/${value}`);
    }
    ,[navigate, value]);
    return(
        <>
        <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Enter room code"/>
        <button onClick={handJoin}>join</button>
        </>
    )}

export default HomePage;