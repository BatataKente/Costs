import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './components/layout/container/Container.js';
import Company from './components/pages/company/Company.js';
import Contact from './components/pages/contact/Contact.js';
import Home from './components/pages/home/Home.js';
import NewProject from './components/pages/new_project/NewProject.js';
import NavigationBar from './components/layout/navigationBar/NavigationBar.js'
import Footer from './components/layout/footer/Footer.js'
import Projects from './components/pages/projects/Projects';
import SeuMadruga from './components/pages/don_ramon/SeuMadruga';
import Project from './components/pages/project/Project.js';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Container customClass="min-height">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/seu-madruga' element={<SeuMadruga/>}/>
            <Route path='/company' element={<Company/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/newproject' element={<NewProject/>}/>
            <Route path='/project/:id' element={<Project/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
