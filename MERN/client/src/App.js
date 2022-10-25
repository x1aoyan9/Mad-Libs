import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MadLibsForm from './components/MadLibsForm';
import MadLibsDisplayAll from './components/MadLibsDisplayAll';
import MadLibsDisplayOne from './components/MadLibsDisplayOne';
import MadLibsUpdate from './components/MadLibsUpdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MadLibsDisplayAll />} />
          <Route path="/madlibs" element={<MadLibsForm />} />
          <Route path="/madlibs/edit/:id" element={<MadLibsUpdate />} />
          <Route path="/madlibs/:id" element={<MadLibsDisplayOne/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;