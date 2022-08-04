import { useEffect } from "react";

function Video() {

    useEffect(() =>{

    },[])
    
    
    return(
        <div id="player">
            <div className="video-container">
                <video className="main-video" src="/video/main.mp4" controls muted autoPlay loop></video>
            </div>
        </div>
    )
};

export default Video;
