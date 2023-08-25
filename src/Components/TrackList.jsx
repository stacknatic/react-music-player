import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMusicPlayer } from "../hooks/useMusicPlayer";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";


const TrackList = () => {
    const music = useMusicPlayer();

    return (
        <div>

        {music.trackList.map((track, index) => (
            <div key={`${track}_${index}`}>
            <button onClick={() => music.playTrack(index)}>
                {music.isPlaying && music.currentTrackIndex === index ?(
                    <FontAwesomeIcon icon={faPause} />
                ) : (
                    <FontAwesomeIcon icon={faPlay} />
                )}

            </button>
            <div>Track Playing: {track.name}</div>
        </div>
        )
        )}
        </div>
    )
}



export default TrackList;