import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MilanoPage from "./pages/MilanoPage"
import TorinoPage from "./pages/TorinoPage"
import GenovaPage from "./pages/GenovaPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/milano" element={<MilanoPage />} />
        <Route path="/torino" element={<TorinoPage />} />
        <Route path="/genova" element={<GenovaPage />} />
      </Routes>
    </BrowserRouter>
  )
}
