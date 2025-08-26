import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Departments from './pages/Departments'
import Admissions from './pages/Admissions'
import GalleryPage from './pages/GalleryPage'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div id="main">
      <Navbar />

      <main className="container-fluid py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
