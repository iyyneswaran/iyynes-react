import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './Counter_app/Counter';
import ToggleText from './Toggle_text/ToggleText';
import ColorBox from './ColorChanger/ColorBox';
import PostCard from './SocialPost/PostCard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/counter' element={<Counter />} />
        <Route path='/toggletext' element={<ToggleText />} />
        <Route path='/color' element={<ColorBox />} />
        <Route path='/post' element={<PostCard />} />
      </Routes>
    </Router>
  )
}

export default App;