import {Routes,Route} from 'react-router-dom'
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Portfolio from "./pages/Portfolio"
import Compare from "./pages/Compare"
function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/compare" element={<Compare/>}/>
    </Routes>
    </>
  )
}
export default App