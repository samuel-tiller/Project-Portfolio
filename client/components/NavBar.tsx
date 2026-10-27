import { Link } from "react-router";

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to={('/')}>Home</Link></li>
          <li><Link to={('/projects')}>Projects</Link></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar