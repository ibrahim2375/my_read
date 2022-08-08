//MUI icons
import AddIcon from '@mui/icons-material/Add';
//components
import BooksSection from '../components/Books_Section'
//router
import { Link } from 'react-router-dom'
function Home({ books, remove_book, change_list }) {
    return (
        <div className="Home">
            <header>
                <h1>My Read</h1>
            </header>
            <section>
                <h1>Currently Reading</h1>
                <hr />
                <BooksSection Books={books} Remove_Book={remove_book} Change_List={change_list} section_data='currently_read' />
            </section>
            <section>
                <h1>Want To Read</h1>
                <hr />
                <BooksSection Books={books} Remove_Book={remove_book} Change_List={change_list} section_data='want_to_read' />
            </section>
            <section>
                <h1>Read</h1>
                <hr />
                <BooksSection Books={books} Remove_Book={remove_book} Change_List={change_list} section_data='read' />
            </section>
            <Link to='/search' className="Add_books">
                <AddIcon sx={{ color: 'white', fontSize: '32px' }} />
            </Link>
        </div>
    );
}

export default Home;
