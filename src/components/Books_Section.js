// MUI icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Books_Section({ Books, Remove_Book, Change_List, section_data }) {
    const handleBook = (event, id) => {
        const selected_value = event.target.value;
        if (selected_value === 'none') {
            Remove_Book(id);
        }
        else if (selected_value === 'currently_reading') {
            Change_List(id, 'currently_read');
        }
        else if (selected_value === 'read') {
            Change_List(id, 'read');
        } else {
            Change_List(id, 'want_to_read');
        }
    }
    return (
        <ol className="books">
            {
                Books.filter((book) => book.state === section_data).map((cr) => (
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
    )
}
export default Books_Section;