import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
//router
import { Link } from 'react-router-dom'
//components
import BooksSection from '../components/Books_Section'

function Search({ books, remove_book, change_list }) {
    const [searchInput, setsearchInput] = useState('');
    const handle = (event) => {
        setsearchInput(event.trim());
    }
    //search
    const result = searchInput !== "" ? books.filter((B) => B.book_name.toLowerCase().includes(searchInput.toLowerCase())) : [];
    return (
        <div className="search">
            <input type="text" placeholder="Search by title" value={searchInput} onChange={(e) => handle(e.target.value)} />
            <div className="search_page_content">
                <Link to="/">
                    <KeyboardBackspaceIcon sx={{ color: 'green', fontSize: '32px' }} />
                </Link>
                <BooksSection Books={books} Remove_Book={remove_book} Change_List={change_list} result={result} />
            </div>
        </div>
    )
}

export default Search