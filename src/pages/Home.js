//MUI icons
import AddIcon from '@mui/icons-material/Add';
//components
import BooksSection from '../components/Books_Section'
//router
import { Link } from 'react-router-dom'
function Home({ books, change_list }) {
    return (
        <div className="Home">
            <header>
                <h1>My Reads</h1>
            </header>
            <section>
                <h1>Currently Reading</h1>
                <hr />
                <BooksSection Books={books} Change_List={change_list} section_data="currentlyReading" />
            </section>
            <section>
                <h1>Want To Read</h1>
                <hr />
                <BooksSection Books={books}  Change_List={change_list} section_data='wantToRead' />
            </section>
            <section>
                <h1>Read</h1>
                <hr />
                <BooksSection Books={books}  Change_List={change_list} section_data='read' />
            </section>
            <Link to='/search' className="Add_books">
                <AddIcon sx={{ color: 'white', fontSize: '32px' }} />
            </Link>
        </div>
    );
}

export default Home;
