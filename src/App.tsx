import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AppShell from "./components/layout/AppShell"
import Opportunities from "./pages/Opportunities"

function App() {
  return <BrowserRouter><AppShell><Routes><Route path="/" element={<Navigate to="/dashboard" replace/>}/><Route path="/dashboard" element={<Opportunities/>}/><Route path="/opportunities" element={<Opportunities/>}/><Route path="*" element={<Navigate to="/dashboard" replace/>}/></Routes></AppShell></BrowserRouter>
}

export default App
