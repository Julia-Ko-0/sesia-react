import { useState } from 'react';
import { CrHeder } from './componens/heder/heder';
import { OtFilm } from './componens/fech/f';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [mas, setApp] = useState([])
  const [poisk,setPoisk] = useState('')
  useEffect(()=>{
    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
    method: 'GET',
    headers: {
      'X-API-KEY': 'b21eef88-04fc-4cc5-87c0-3fca962aa7e8',
      'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json => setApp(json.items))
  },[setApp])
  console.log(mas)
  return (
    <div className="App">
      <CrHeder f={setPoisk}/>
      <div class="map_div">
      {
        mas.map(m=>(
          <OtFilm sost={poisk} pfoto={m.posterUrinl} countr={m.countries} f= {m.nameRu}/>
        ))
      }
      </div>
      
    </div>
  );
}

export default App;
