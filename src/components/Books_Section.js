//porp types
import PropTypes from 'prop-types'
// MUI icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Books_Section({ Books, Change_List, section_data }) {
    const handleBook = (event, book) => {
        const selected_value = event.target.value;
        Change_List(book, selected_value);
    }
    return (
        <ol className="books">
            {
                Books.filter((book) => book.shelf === section_data).map((cr) => (
                    <li className="book" key={cr.id} >
                        <div className="image">
                            <img src={cr.imageLinks.thumbnail} alt="book" />
                            <div className="select_menu">
                                <div className="select_icon">
                                    <div className="arrow_icon">
                                        <ArrowDropDownIcon sx={{ color: 'white', fontSize: '32px' }} />
                                    </div>
                                    <select value={cr.shelf} onChange={(e) => handleBook(e, cr)}>
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
                ))
            }
        </ol>
    )
}
Books_Section.prototype = {
    Books: PropTypes.array.isRequired,
    Remove_Book: PropTypes.func.isRequired,
    Change_List: PropTypes.func.isRequired,
    section_data: PropTypes.string.isRequired
}
export default Books_Section;