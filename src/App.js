import Accueille from "./component/home"
import Marques from "./component/brand/index"
import Publications from "./component/post/index"
import Utilisateurs from "./component/account-management/index"
import NouvellesMarques from "./component/new-brand/index"
import Login from "./component/login"
import './App.css';
import ResponsiveAppBar from './component/layout';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Accueille />} />
        <Route path="/login" element={<Login />} />
        <Route path="Marques" element={<Marques />} />
        <Route path="Publications" element={<Publications />} />
        <Route path="Utilisateurs" element={<Utilisateurs />} />
        <Route path="NouvellesMarques" element={<NouvellesMarques />} />
      </Routes>
    </div>
  );
}

export default App;
