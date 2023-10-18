import { Routes, Route } from "react-router-dom"
import { Home, CreateBook, DeleteBook, EditBook, ShowBook } from "./pages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="books/create" element={<CreateBook/>}/>
      <Route path="/books/details/:id" element={<ShowBook/>}/>
      <Route path="/books/delete/:id" element={<DeleteBook/>}/>
      <Route path="/books/edit/:id" element={<EditBook/>}/>
    </Routes>
  )
}

export default App