import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "../../ui/components/Navbar"
import MarvelPage from "../pages/MarvelPage"
import DCPage from "../pages/DCPage"
import SearchPage from "../pages/SearchPage"
import Heroes from "../pages/Heroes"

const HereosRoutes = () => {
  return (
    <>
      <Navbar/>
        <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="heroes" element={<Heroes />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
        </div>
    </>
  )
}

export default HereosRoutes
