import { faPause } from '@fortawesome/free-solid-svg-icons';
import vintage from './assets/vintage.mp3'
import catchy from './assets/vintage.mp3'
import sexy from './assets/sexy.mp3'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { PlayerControls } from './Components/PlayerControls';
import TrackList from './Components/TrackList';
import { useState } from 'react';
import { MusicContext } from '../src/contexts/MusicContext';


function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(vintage),
    tracks: [
      {
        name: "Vintage Music",
        file: vintage
      },
      {
        name: "Catchy Song",
        file: catchy
      },
      {
        name: "Sexy Chill",
        file: sexy
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

