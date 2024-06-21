import { Outlet } from "react-router-dom"
import Navbar from "../Components/Header/Navbar"

const MainLayout = () => {
  return (
    <main className="dark:bg-black overflow-hidden w-full">
      <Navbar/>
  <Outlet/>
  {/* <footer>Footer</footer> */}
    </main>
  )
}

export default MainLayout
