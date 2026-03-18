import { Link } from "react-router-dom";
export default function Nav(){
  return(
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link> 
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/compare">Compare</Link>
      </nav>
    </div>
  )
}