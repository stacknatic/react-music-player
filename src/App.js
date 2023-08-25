import { faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { MusicContext } from '../src/contexts/MusicContext';
import { PlayerControls } from './Components/PlayerControls';
import { useState } from 'react';
import TrackList from './Components/TrackList';

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Track 1",
        file: ""
      },
      {
        name: "Track 2",
        file: ""
      }
    ],
    currentTrackIndex: 0,
    isPlaying: false,
  })
  console.log("State:", state)
  return (
    <MusicContext.Provider value={[state, setState]}>
    <div className="App">
      <PlayerControls />
      <TrackList />
    </div>
    </MusicContext.Provider>
  );
}

export default App;

