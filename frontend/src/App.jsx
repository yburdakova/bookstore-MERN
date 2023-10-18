import { Routes, Route } from "react-router-dom"
import { Home, OpenBook, CreateBook, DeleteBook, EditBook } from "./pages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="books/create" element={<OpenBook/>}/>
      <Route path="/books/details/:id" element={<CreateBook/>}/>
      <Route path="/books/delete/:id" element={<DeleteBook/>}/>
      <Route path="/books/edit/:id" element={<EditBook/>}/>
    </Routes>
  )
}

export default App