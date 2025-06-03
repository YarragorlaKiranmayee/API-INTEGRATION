// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
      setWeather(response.data);
    } catch (err) {
      alert('Failed to fetch weather');
    }
  };

  return (
    <div>
      <input value={city} onChange={e => setCity(e.target.value)} />
      <button onClick={getWeather}>Get Weather</button>
      {weather && <div>{weather.weather[0].description}</div>}
    </div>
  );
}

export default App;
