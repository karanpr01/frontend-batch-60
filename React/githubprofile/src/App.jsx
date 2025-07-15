import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import RepoPage from './Pages/RepoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos/:username" element={<RepoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App