import NavBar from './components/header/NavBar';
import ContainerCardItems from './components/components item/ContainerCardItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ContainerCardItems />} />
        <Route path='/item/:id' element={ <ContainerCardItems />} />
        <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
