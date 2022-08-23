import React from 'react'
import { useState } from 'react'
//porp types
import PropTypes from 'prop-types'
// MUI icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Book({ imageLinks, title, authors, Change_List, shelf, book }) {
    const [shelves] = useState([
        { id: 1, shelfName: 'currentlyReading', shelfDisplayName: 'Currently Reading' },
        { id: 2, shelfName: 'read', shelfDisplayName: 'read' },
        { id: 3, shelfName: 'wantToRead', shelfDisplayName: 'want to read' },
        { id: 4, shelfName: 'none', shelfDisplayName: 'none' },
    ])
    const handleBook = (event, book) => {
        const selected_value = event.target.value;
        Change_List(book, selected_value);
    }
    const authorsHandled = authors?.join(',');

    return (
        <li className="book"  >
            <div className="image">
                <img src={imageLinks} alt="not available" />
                <div className="select_menu">
                    <div className="select_icon">
                        <div className="arrow_icon">
                            <ArrowDropDownIcon sx={{ color: 'white', fontSize: '32px' }} />
                        </div>
                        <select value={shelf} onChange={(e) => handleBook(e, book)}>
                            <option value='move' disabled>move to..</option>
                            {
                                shelves.map(shelf => (
                                    <option key={shelf.id} value={shelf.shelfName} >{shelf.shelfDisplayName}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="book_details">
                <h4>{title}</h4>
                <p>{authorsHandled}</p>
            </div>
        </li>
    )
}
Book.prototype = {
    imageLinks: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    Change_List: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
}
export default Book