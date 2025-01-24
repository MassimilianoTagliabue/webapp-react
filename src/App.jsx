import { BrowserRouter , Route, Routes } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Homepage from "./pages/Homepage"
import MoviesPage from "./pages/MoviesPage"



function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
               <Route index element={<Homepage/>}/>
               <Route path="/movies" element={<MoviesPage/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
