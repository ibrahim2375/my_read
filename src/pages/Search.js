import React, { useState, useEffect } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PropTypes from 'prop-types'
//router
import { Link } from 'react-router-dom'
import * as booksApi from '../BooksAPI'
// MUI icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Search({ books, change_list }) {
    const [searchInput, setsearchInput] = useState('');
    const [search, setsearch] = useState([]);
    const [loading, setloading] = useState(false);
    const handle = (event) => {
        setsearchInput(event);
    }
    const handleBook = (event, book) => {
        const selected_value = event.target.value;
        change_list(book, selected_value);
    }
    //search
    useEffect(() => {
        if (searchInput !== '') {
            booksApi.search(searchInput, 20).then((res) => {
                if (res && !res.error) {
                    setsearch(res.map(s => {
                        books.forEach(b => { if (s.id === b.id) { s.shelf = b.shelf } })
                        return s;
                    }));
                    setloading(true);
                } else {
                    setloading(false);
                }
            });
        }
    })
    return (
        <div className="search">
            <input type="text" placeholder="Search by title" value={searchInput} onChange={(e) => handle(e.target.value)} />
            <div className="search_page_content">
                <Link to="/">
                    <KeyboardBackspaceIcon sx={{ color: 'green', fontSize: '32px' }} />
                </Link>
                <ol className="books">
                    {
                        loading === true ?
                            (search.map((cr) => (
                                <li className="book" key={cr.id} >
                                    <div className="image">
                                        <img src={cr.imageLinks.thumbnail} alt="book" />
                                        <div className="select_menu">
                                            <div className="select_icon">
                                                <div className="arrow_icon">
                                                    <ArrowDropDownIcon sx={{ color: 'white', fontSize: '32px' }} />
                                                </div>
                                                <select value={cr.shelf ?? 'none'} onChange={(e) => handleBook(e, cr)}>
                                                    <option value="currentlyReading">currently reading</option>
                                                    <option value="read">read</option>
                                                    <option value="wantToRead">want to read</option>
                                                    <option value="none">none</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="book_details">
                                        <h4>{cr.title}</h4>
                                        <p>{cr.authors[0]}</p>
                                    </div>
                                </li>
                            ))) : ''

                    }
                </ol>
            </div>
        </div>
    )
}

Search.propTypes = {
    search: PropTypes.array,
}
export default Search