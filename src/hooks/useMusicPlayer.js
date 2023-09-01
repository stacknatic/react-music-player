import { useContext } from "react";
import { MusicContext } from "../contexts/MusicContext";


const useMusicPlayer = () => {
    const [state, setState] = useContext(MusicContext);

    const togglePlay = () => {
        if(state.isPlaying) {
            state.audioPlayer.pause();
            setState({...state, isPlaying: false})
        } else {
            setState({...state, isPlaying: true})
            state.audioPlayer.play();
        }
    }

    const playTrack = (index) => {
        if(index == state.currentTrackIndex) {
            togglePlay();
        } else {
            state.audioPlayer.pause()
            state.audioPlayer = new Audio(state.tracks[index].file)
            state.audioPlayer.play();
            setState({...state, currentTrackIndex: index, isPlaying: true})
        }
    }

    const playPreviousTrack = () => {
        let newIndex = null;
        state.currentTrackIndex === 0 ? (newIndex = state.tracks.length - 1) : (newIndex = state.currentTrackIndex - 1);
        playTrack(newIndex);
    }

    const playNextTrack = () => {
        let newIndex = null;
        state.currentTrackIndex === state.tracks.length - 1 ? (newIndex = 0) : (newIndex = state.currentTrackIndex + 1);
        playTrack(newIndex);
    }

    return {
        togglePlay,
        playTrack,
        currentTrackIndex: state.currentTrackIndex,
        currentTrackName: state.currentTrackIndex !==null && state.tracks[state.currentTrackIndex].name,
        trackList: state.tracks,
        isPlaying: state.isPlaying,
        playPreviousTrack,
        playNextTrack
    }
}

export {useMusicPlayer}