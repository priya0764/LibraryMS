import logo from "./logo.svg";
import "./App.css";
import Readers from "./components/readers";
import ReaderService from "./services/readerService";
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





function App() {
  return (

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

        <Route path="/Admin/login" component={LoginFormAdmin}/>
       <Route path="/user/login" component={LoginFormUser}/>
       <Route path="/userOrAdmin" component={UserOrAdmin}/>
       <Route path="/adminPage" component={AdminPage}/>
      

       
      
      </Switch>
    </div>
  );
}

export default App;
