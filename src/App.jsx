import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './Counter_app/Counter';
import ToggleText from './Toggle_text/ToggleText';
import ColorBox from './ColorChanger/ColorBox';
import PostCard from './SocialPost/PostCard';
import LandingPage from './Landing_page/LandingPage';
import SearchFilter from './SearchFilter/SearchFilter';
import GalleryApp from './Gallery_app/GalleryApp';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/toggletext' element={<ToggleText />} />
        <Route path='/color' element={<ColorBox />} />
        <Route path='/post' element={<PostCard />} />
        <Route path='/searchfilter' element={<SearchFilter />} />
        <Route path='/gallery' element={<GalleryApp />} />
      </Routes>
    </Router>
  )
}

export default App;