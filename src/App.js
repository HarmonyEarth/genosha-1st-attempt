import { Route, Routes } from 'react-router-dom';
import RequireAuth from './HOC/RequireAuth';
import CharacterSelect from './pages/CharacterSelect';
import Game from './pages/Game';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<CharacterSelect />} />
        <Route
          path="/game"
          element={
            <RequireAuth>
              <Game />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
