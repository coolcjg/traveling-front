import { useEffect } from 'react';
import Video from './Video';

const Home = () => {

    useEffect(()=>{

        console.log("Content 마운트");

        return()=>{
            console.log("언마운트");
        }

    }, [])

    return (
        <>
        <Video/>    
        </>
      );
}

export default Home;