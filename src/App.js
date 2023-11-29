import { Routes } from 'react-router-dom';
import './App.css';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';




function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element= {<Layout/>}>
        <Route index element= {<Home/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='resume' element={<Resume/>} />
        <Route path='projects' element={<Projects/>} /> 

      </Route>
    </Routes>
    </div>
  );
}

export default App;
