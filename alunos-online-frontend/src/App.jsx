import Footer from "./components/Footer"
import './App.css';
import Menu from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RelacaoAlunos from "./pages/RelacaoAlunos";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/alunos" element={<RelacaoAlunos />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
