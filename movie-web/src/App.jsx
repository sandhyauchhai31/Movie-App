import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from "./navbar/Navbar"
import PopularMoviePage from "./components/PopularMoviePage"
import TopRatedPage from "./components/TopRatedPage"
import UpcomingPage from "./components/UpcomingPage"

function App() {
  
  return (
    <>
      <div className="container">     
        <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<PopularMoviePage />} />
          <Route path="/popular" element={<PopularMoviePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
