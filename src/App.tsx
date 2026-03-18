import { Routes,Route,Link} from "react-router-dom"
function App() {

  return (
    <>
    <Nav/>
    </>
  )
}

function Nav(){
  return(
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Search">Search</Link> 
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Compare">Compare</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Compare" element={<Compare/>}/>
      </Routes>
    </div>
  )
}

function Home(){
  return (
    <>
      <p>Hej</p>
    </>
  )
}

function Search(){
  return(
    <div>
      <p>Search</p>
    </div>
  )
}

function Portfolio(){
  return(
    <div>
      Portfolio
    </div>
  )
}

function Compare(){
  return(
    <div>
      Compare
    </div>
  )
}
export default App
