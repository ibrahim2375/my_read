import React, { useState } from 'react'
//icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
//router
import { Link } from 'react-router-dom'
function Search({ books, remove_book, change_list }) {
    const [searchInput, setsearchInput] = useState('');
    const handle = (event) => {
        setsearchInput(event.trim());
    }
    //search
    // const result = searchInput !== "" ? books.filter((B) => B.book_name.toLowerCase().includes(searchInput.toLowerCase())) : [];
    const result = books.filter((B) => B.book_name.toLowerCase().includes(searchInput.toLowerCase()));
    ///handel
    const handleBook = (event, id) => {
        const selected_value = event.target.value;
        if (selected_value === 'none') {
            remove_book(id);
        }
        else if (selected_value === 'currently_reading') {
            change_list(id, 'currently_read');
        }
        else if (selected_value === 'read') {
            change_list(id, 'read');
        }
        else {
            change_list(id, 'want_to_read');
        }
    }
    return (
        <div className="search">
            <input type="text" placeholder="Search" value={searchInput} onChange={(e) => handle(e.target.value)} />
            <div className="search_page_content">
                <Link to="/">
                    <KeyboardBackspaceIcon sx={{ color: 'green', fontSize: '32px' }} />
                </Link>
                <ol className="books">
                    {
                        result.map((cr) => (
                            <li className="book" key={cr.id} >
                                <div className="image">
                                    <img src={cr.book_img} alt="" />
                                    <div className="select_menu">
                                        <div className="select_icon">
                                            <div className="arrow_icon">
                                                <ArrowDropDownIcon sx={{ color: 'white', fontSize: '32px' }} />
                                            </div>
                                            <select value={cr.state} onChange={(e) => handleBook(e, cr.id)}>
                                                <option value="currently_reading">currently reading</option>
                                                <option value="read">read</option>
                                                <option value="want_to_read">want to read</option>
                                                <option value="none">none</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="book_details">
                                    <h4>{cr.book_name}</h4>
                                    <p>{cr.book_author}</p>
                                </div>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default Search