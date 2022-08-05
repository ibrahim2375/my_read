import './css/App.css';
import { useState } from 'react'
//import books data
import { Books } from './BooksData'
//MUI icons
import AddIcon from '@mui/icons-material/Add';
//components
import Home from './pages/Home'
import Search from './pages/Search'
//router
import { Routes, Route, Link } from 'react-router-dom'
function App() {
  const [books, setbooks] = useState(Books)
  const remove_book = (id) => {
    setbooks(books.filter((b) => b.id !== id));
  }
  const change_list = (id, state) => {
    setbooks(books.map((b) => b.id === id ? { ...b, state: state } : b));
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home remove_book={remove_book} change_list={change_list} books={books} />}>
        </Route>
        <Route path="/search" element={<Search remove_book={remove_book} change_list={change_list} books={books} />}>
        </Route>
      </Routes>
      <Link to='/search' className="Add_books">
        <AddIcon sx={{ color: 'white', fontSize: '32px' }} />
      </Link>
    </div>
  );
}

export default App;
