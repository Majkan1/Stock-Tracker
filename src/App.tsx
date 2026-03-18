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
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Search" element={<Search/>}/>
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
export default App
