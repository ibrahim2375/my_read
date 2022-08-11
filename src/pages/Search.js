import React, { useState, useEffect } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PropTypes from 'prop-types'
//router
import { Link } from 'react-router-dom'
import * as booksApi from '../BooksAPI'
//components 
import Book from '../components/Book'
function Search({ books, change_list }) {
    const [searchInput, setsearchInput] = useState('');
    const [search, setsearch] = useState([]);
    const [loading, setloading] = useState(false);
    const handle = (event) => {
        setsearchInput(event);
    }
    //search
    useEffect(() => {
        if (searchInput !== '') {
            booksApi.search(searchInput, 100).then((res) => {
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
                            (search.map((b) => (
                                <Book key={b.id} imageLinks={b.imageLinks ? b.imageLinks.thumbnail : null} title={b.title} authors={b.authors} Change_List={change_list} shelf={b.shelf ?? 'none'} book={b} />
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