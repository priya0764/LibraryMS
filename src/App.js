import "./App.css";
import "./design.css";

import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Readers from "./components/readers";

import AddFeedback from './components/addFeedback';
import FeedbackDetails from './components/feedbackDetails';

import AddReader from './components/addReader';
import ReaderDetails from './components/readerDetails';
import Feedback from './components/feedback';

import UserOrAdmin from './components/userOrAdmin';
import LoginFormAdmin from './components/loginFormAdmin';
import AdminPage from './components/adminPage'
import Books from './components/books';
import AddBook from './components/addBook';
import BookDetails from './components/bookDetails';
import BooksOrder from './components/booksOrder';
import DamagedBooks from './components/damagedBooks';
import AddBooksOrder from './components/addBooksOrder';
import BooksOrderDetails from './components/booksOrderDetails';
import AddDamagedBooks from './components/addDamagedBooks';
import DamagedBooksDetails from './components/damagedBooksDetails';
import Users from './components/user';
import AddUser from './components/addUser';
import UserDetails from './components/userDetails';
import Address from './components/address';
import AddAddress from './components/addAddress';
import AddressDetails from './components/addressDetails';
import BooksIssued from './components/booksIssued';
import AddBooksIssued from './components/addBooksIssued';
import BooksIssuedDetails from './components/booksIssuedDetails';
import Register from './components/register';
import UserLogin from './components/userLogin';
import Logout from './components/logout';
import Home from './components/home';

import UserBooksList from './components/userBooks';
import ViewBook from './components/viewBook';

import UserPage from './components/userPage'



import Publishers from './components/publishers';
import ViewPublisher from './components/viewPublisher';
import UpdatePublisher from './components/updatePublisher';
import AddPublisher from './components/addPublisher';

import SuggestedBooks from './components/suggestedBooks';
import AddSuggestedBooks from './components/addSuggestedBooks';
import UpdateSuggestedBooks from './components/updateSuggestedBooks';
import ViewSuggestedBooks from './components/viewSuggestedBooks';
import SearchTitle from './components/searchSuggestedBookTitle';

import Author from './components/author';
import ViewAuthor from './components/viewAuthor';
import UpdateAuthor from './components/updateAuthor';
import AddAuthor from './components/addAuthor';

import BooksReturned from './components/booksReturned'
import AddBooksReturned from './components/addBooksReturned';
import UpdateBooksReturned from './components/updateBooksReturned';
import ViewBooksReturned from './components/viewBooksReturned';

import Dashboard from './components/dashboard';
import Dashboard2 from "./components/dashboard2";
import Dashboard3 from "./components/dashboard3";

import SearchAuthor from './components/searchAuthorByName';
import SearchReturnedBook from './components/searchReturnedBookByDelayedDays';


import ContactPage from './components/contactPage';
import ThankyouPage from "./components/thankyouPage";
import Ebook from "./components/ebook"
import EbookUser from "./components/ebookUser";
import UpdateProfile from "./components/updateProfile";

import Disclaimer from './components/disclaimer'
//import AddReader from './components/addReader'
//import ReaderDetails from './components/readerDetails'
//import Feedback from './components/feedback'
//import {Route, Switch ,Redirect} from 'react-router-dom'



import CategoryBookHome from './components/categoryBookHome';
import Mystery from './components/mystery';
import Thriller from './components/thriller';
import ScienceFiction from './components/scienceFiction'
import Horror from './components/horror'
import Adventure from "./components/adventure";
import Fantasy from './components/fantasy'
import ViewBookDashboard from './components/viewBookDashboard';



import UserNavbar from './components/userNavbar';
import UserSuggestedBooks from './components/userSuggestedBook';
import UserBooksList2 from "./components/userBook2";
import ViewBookUser from "./components/viewBookUser";

function App() {
  return (
    <div className="App">
      {/* <div className="container-fluid"> */}
        <Router>
        <Switch>
          <Route path="/reader/add" component={AddReader} />
          <Route path="/reader/update/:id" component={ReaderDetails} />
          <Route path="/reader/:id" component={ReaderDetails} />
          <Route path="/reader" component={Readers} />
          <Route path="/updateProfile/:id" component={UpdateProfile}></Route>

          <Route path="/feedback/add" component={AddFeedback} />
          <Route path="/feedback/update/:id" component={FeedbackDetails} />
          <Route path="/feedback/:id" component={FeedbackDetails} />
          <Route path="/feedback" component={Feedback} />


          <Route path="/Admin/login" component={LoginFormAdmin} />
          <Route path="/user/login" component={UserLogin} />
          <Route path="/userOrAdmin" component={UserOrAdmin} />
          <Route path="/adminPage" component={AdminPage} />


          <Route path="/book/details" component={UserBooksList} />
          <Route path="/book/add" component={AddBook} />
          <Route path="/getbook/subject/:subject" component={Books} />
          <Route path="/book/update/:id" component={BookDetails} />
          <Route path="/book" component={Books} />
          <Route path="/booksorder/add" component={AddBooksOrder} />
          <Route path="/getbooksorder/quantity/:quantity" component={BooksOrder} />
          <Route path="/booksorder/update/:id" component={BooksOrderDetails} />
          <Route path="/booksorder" component={BooksOrder} />
          <Route path="/damagedbook/add" component={AddDamagedBooks} />
          <Route path="/getdamagedbook/quantity/:quantity" component={DamagedBooksDetails} />
          <Route path="/damagedbook/update/:id" component={DamagedBooksDetails} />
          <Route path="/damagedbook" component={DamagedBooks} />

          <Route path="/viewbook/:title" component={ViewBook} />
          <Route path="/bookdetail/dashboard/:title" component={ViewBookDashboard} />
          <Route path="/category/books/fantasy" component={Fantasy} />
          <Route path="/category/books/adventure" component={Adventure} />
          <Route path="/category/books/sciencefiction" component={ScienceFiction} />
          <Route path="/category/books/horror" component={Horror} />
          <Route path="/category/books/thriller" component={Thriller} />
          <Route path="/category/books/mystery" component={Mystery} />
          <Route path="/category/books" component={CategoryBookHome} />

          <Route path="/user/add" component={AddUser} />
          <Route path="/user/update/:id" component={UserDetails} />
          <Route path="/user/get/:id" component={UserDetails} />
          <Route path="/users" component={Users} />
          <Route path="/address/add" component={AddAddress} />
          <Route path="/address/update/:id" component={AddressDetails} />
          <Route path="/address/get/:id" component={AddressDetails} />
          <Route path="/address" component={Address} />
          <Route path="/booksIssued/add" component={AddBooksIssued} />
          <Route path="/booksIssued/update/:id" component={BooksIssuedDetails} />
          <Route path="/booksIssued/get/:id" component={BooksIssuedDetails} />
          <Route path="/booksIssued" component={BooksIssued} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/userBook2" component={UserBooksList2}></Route>
          <Route path="/viewBookUser/:title" component={ViewBookUser}></Route>

          <Route path="/publisher" component={Publishers}></Route>
          <Route path="/update-publisher/:publisherId" component={UpdatePublisher}></Route>
          <Route path="/add-publisher" component={AddPublisher}></Route>
          <Route path="/view-publisher/:publisherId" component={ViewPublisher}></Route>

          <Route path="/suggestedbooks" component={SuggestedBooks}></Route>
          <Route path="/usersuggestedbook" component={UserSuggestedBooks} />
          <Route path="/update-suggestedbooks/:id" component={UpdateSuggestedBooks}></Route>
          <Route path="/add-suggestedbooks" component={AddSuggestedBooks}></Route>
          <Route path="/view-suggestedbooks/:id" component={ViewSuggestedBooks}></Route>
          <Route path="/suggestedbooks-title/:title" component={SearchTitle}></Route>

          <Route path="/userPage" component={UserPage} />
          <Route path="/userNavbar" component={UserNavbar}/>


            <Route path="/author" component={Author}></Route>
            <Route path="/view-author/:authorId" component={ViewAuthor}></Route>
            <Route path="/update-author/:authorId" component={UpdateAuthor}></Route>
            <Route path="/add-author" component={AddAuthor}></Route>
            <Route path="/author-name/:firstName" component={SearchAuthor}></Route>

            <Route path="/contact-Page" component={ContactPage}></Route>
            <Route path="/thankyou-Page" component={ThankyouPage}></Route>

            <Route path="/disclaimer" component={Disclaimer}></Route>
            <Route path="/ebook" component={Ebook}></Route> 
            <Route path="/userEbook" component={EbookUser}></Route>



          <Route path="/booksReturned" component={BooksReturned}></Route>
          <Route path="/add-returned" component={AddBooksReturned}></Route>
          <Route path="/update-returned/:id" exact component={UpdateBooksReturned}></Route>
          <Route path="/view-returned/:id" component={ViewBooksReturned}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/dashboard2" component={Dashboard2}></Route>
          <Route path="/dashboard3" component={Dashboard3}></Route>
          
          <Route path="/returnedBooks-delayed/:delayedDays" component={SearchReturnedBook}></Route>
          <Route path="/" exact component={Home} />
        </Switch>
        </Router>
      {/* </div> */}
    </div>
  );
}

export default App; 