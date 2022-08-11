//porp types
import PropTypes from 'prop-types'
import Book from './Book'

function Books_Section({ Books, Change_List, section_data }) {
    return (
        <ol className="books">
            {
                Books.filter((book) => book.shelf === section_data).map((b) => (
                    <Book key={b.id} imageLinks={b.imageLinks.thumbnail} title={b.title} authors={b.authors} Change_List={Change_List} shelf={b.shelf} book={b} />

                ))
            }
        </ol>
    )
}
Books_Section.prototype = {
    Books: PropTypes.array.isRequired,
    Change_List: PropTypes.func.isRequired,
    section_data: PropTypes.string.isRequired
}
export default Books_Section;