import "./App.css";

import Readers from "./components/readers";
import { Route, Switch, Redirect } from "react-router-dom";
import AddReader from './components/addReader'
import ReaderDetails from './components/readerDetails'
import Feedback from './components/feedback'
import AddFeedback from './components/addFeedback';
import FeedbackDetails from './components/feedbackDetails';
import LoginFormUser from './components/loginFormUser'
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
import AddressDetails from'./components/addressDetails';
import BooksIssued from './components/booksIssued';
import AddBooksIssued from './components/addBooksIssued';
import BooksIssuedDetails from './components/booksIssuedDetails';
import UserLogin from './components/userLogin';
import Logout from './components/logout';
import Home from './components/home';
import SearchBook from './components/searchBook';
import UserBooksList from './components/userBooks';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Switch>
          <Route path="/reader/add" component={AddReader} />
          <Route path="/reader/update/:id" component={ReaderDetails} />
          <Route path="/reader/:id" component={ReaderDetails} />
          <Route path="/reader" component={Readers} />

          <Route path="/feedback/add" component={AddFeedback} />
          <Route path="/feedback/update/:id" component={FeedbackDetails} />
          <Route path="/feedback/:id" component={FeedbackDetails} />
          <Route path="/feedback" component={Feedback} />

          <Route path="/Admin/login" component={LoginFormAdmin} />
          <Route path="/user/login" component={LoginFormUser} />
          <Route path="/userOrAdmin" component={UserOrAdmin} />
          <Route path="/adminPage" component={AdminPage} />

          <Route path="/book/details" component={UserBooksList} />
          <Route path="/book/add" component={AddBook} />
          <Route path="/book/get/subject/:subject" component={SearchBook} />
          <Route path="/book/update/:id" component={BookDetails} />
          <Route path="/book" component={Books} />
          <Route path="/booksorder/add" component={AddBooksOrder} />
          <Route path="/booksorder/get/:id" component={BooksOrderDetails} />
          <Route path="/booksorder/update/:id" component={BooksOrderDetails} />
          <Route path="/booksorder" component={BooksOrder} />
          <Route path="/damagedbook/add" component={AddDamagedBooks} />
          <Route path="/damagedbook/get/:id" component={DamagedBooksDetails} />
          <Route path="/damagedbook/update/:id" component={DamagedBooksDetails} />
          <Route path="/damagedbook" component={DamagedBooks} />

          <Route exact path="/user/add" component={AddUser}/>
         <Route exact path="/user/update/:id" component={UserDetails}/>
        <Route exact path="/user/get/:id" component={UserDetails}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/address/add" component={AddAddress}/>
        <Route exact path="/address/update/:id" component={AddressDetails}/>
        <Route exact path="/address/get/:id" component={AddressDetails}/>
        <Route exact path="/address" component={Address}/>
        <Route exact path="/booksIssued/add" component={AddBooksIssued}/>
        <Route exact path="/booksIssued/update/:id" component={BooksIssuedDetails}/>
        <Route exact path="/booksIssued/get/:id" component={BooksIssuedDetails}/>
        <Route exact path="/booksIssued" component={BooksIssued}/>
        <Route exact path="/userLogin" component={UserLogin}/>
        <Route exact path="/logout" component={Logout}/>
        <Route path="/" exact component={Home} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;