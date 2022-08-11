import './css/App.css';
import { useState, useEffect } from 'react'
/////
import * as booksApi from './BooksAPI'
///
//components
import Home from './pages/Home'
import Search from './pages/Search'
//router
import { Routes, Route } from 'react-router-dom'
function App() {
  const [books, setbooks] = useState([])
  ///change shelf
  const change_list = async (book, shelf) => {
    await booksApi.update(book, shelf).then(_ => {
      setbooks([...books.filter(b => b.id !== book.id), book])
    });
    await booksApi.getAll().then((res => setbooks(res)));
  }
  useEffect(() => {
    const getBooks = async () => {
      const res = await booksApi.getAll();
      setbooks(res);
    }
    getBooks();
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home change_list={change_list} books={books} />}>
        </Route>
        <Route path="/search" element={<Search change_list={change_list} books={books} />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
