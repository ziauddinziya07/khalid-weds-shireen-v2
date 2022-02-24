import React, { useState } from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";

function Audio() {
    var [isPlaying, setIsPlaying] = useState(true);

    function handleClick() {
        var audio = document.getElementById("audio");
        if (isPlaying) audio.pause();
        else audio.play();
        setIsPlaying((isPlaying = !isPlaying));
    }

    return (
        <>
            <audio id="audio" loop>
                <source
                    src="../assets/audio-files/instrumental-flute.mp3"
                    type="audio/mpeg"
                />
            </audio>
            <button id="play-btn" onClick={handleClick}>
                {isPlaying ? <MusicOffIcon /> : <MusicNoteIcon />}
            </button>
        </>
    );
}

export default Audio;
