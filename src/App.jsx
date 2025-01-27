import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Homepage from "./pages/Homepage"
import MoviesPage from "./pages/MoviesPage"
import SingleMovie from "./pages/SingleMovie"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Homepage />} />

            <Route path="/movies">
              <Route path="" element={<MoviesPage />} />
              <Route path=":id" element={<SingleMovie />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
