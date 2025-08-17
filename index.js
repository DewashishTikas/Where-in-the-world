import { createRoot } from "react-dom/client"
import App from "./App"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router"
import CountryDetail from "./components/CountryDetail"
import Home from "./components/Home"




const root = createRoot(document.querySelector('#root'))
root.render(<BrowserRouter >
    <Routes>
        <Route element={<App />} >
        <Route index element={<Home />}/>
        <Route path=":country" element={<CountryDetail />}/>
        </Route>
    </Routes>
</BrowserRouter>)