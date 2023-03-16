import { Routes, Route } from 'react-router-dom';
import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import Table from './components/Table';

function App() {
  return (
    <div className="items-center justify-center pt-12">
      <Routes>
        <Route exact path="/" element={<Table />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
