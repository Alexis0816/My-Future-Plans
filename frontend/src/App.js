import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;