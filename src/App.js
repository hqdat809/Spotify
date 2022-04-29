import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import DetailSong from './component/DetailSong';
import ListSongs from './component/ListSongs';
import { Songs } from './Context';
import DataSongs from './data/songs.json'
import Playing from './component/Playing';
import { useState } from 'react'

function App() {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const songPlayed = DataSongs.find(song => song.id === idSong)
    if (!songPlayed) {
      setSong(DataSongs[0])
    } else {
      setSong(songPlayed)
    }
  }

  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
          {/* span1 */}
          <DetailSong />
          {/* span2 */}
          <ListSongs />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
