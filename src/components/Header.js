import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="nav">
      <Link to="/">
        <div><h1>Bookmark'd</h1></div>
      </Link>
    </nav>
  )
}

export default Header;