import { useEffect } from "react";
import {useState} from 'react';

const SectionItem = (props) => {

    const [hover, setHover] = useState('');

    useEffect(()=>{

    },[]);

    const mouseEnter = () => setHover('hover');

    return(
        <>
            <div className={`item ${hover}`} 
                onMouseEnter={()=>setHover('hover')} 
                onMouseLeave={()=>setHover('')}
            >{props.name}</div>
        </>
    )
    
}


export default SectionItem;