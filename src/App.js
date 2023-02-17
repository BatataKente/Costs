import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './components/layout/Container';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import NavigationBar from './components/layout/NavigationBar.js'
import Footer from './components/layout/Footer.js'
import Projects from './components/pages/Projects';
import SeuMadruga from './components/pages/SeuMadruga';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Container customClass="min-height">
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/projects' element={<Projects/>}/>
            <Route path='/seu-madruga' element={<SeuMadruga/>}/>
            <Route path='/company' element={<Company/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/newproject' element={<NewProject/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
