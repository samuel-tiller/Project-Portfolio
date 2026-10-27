import { Outlet } from 'react-router'
import NavBar from './NavBar'

export default function Layout() {
  return (
    <>
      <header>
        <h1>Project Portfolio</h1>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
