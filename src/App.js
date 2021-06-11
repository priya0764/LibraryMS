import logo from "./logo.svg";
import "./App.css";
import Readers from "./components/readers";
//import ReaderService from "./services/readerService";
import { Route, Switch } from "react-router-dom";
import AddReader from './components/addReader';
import ReaderDetails from './components/readerDetails';
import Feedback from './components/feedback';
import AddFeedback from './components/addFeedback';
import FeedbackDetails from './components/feedbackDetails';
import LoginFormUser from './components/loginFormUser'
import UserOrAdmin from './components/userOrAdmin';
import LoginFormAdmin from './components/loginFormAdmin';
import AdminPage from './components/adminPage';

import Home from "./components/home";
import Publishers from './components/publishers';
import { BrowserRouter as  Router } from 'react-router-dom';
import ViewPublisher from './components/viewPublisher';
import UpdatePublisher from './components/updatePublisher';
import AddPublisher from './components/addPublisher';
import SuggestedBooks from './components/suggestedBooks';
import AddSuggestedBooks from './components/addSuggestedBooks';
import UpdateSuggestedBooks from './components/updateSuggestedBooks';
import ViewSuggestedBooks from './components/viewSuggestedBooks';





function App() {
  return (
    <div className="App">  
    <div className="container-fluid">
    <Router>
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

          <Route exact path="/" component={Home} />
          <Route path="/publisher" component={Publishers}></Route>
          <Route path="/update-publisher/:publisherId" component={UpdatePublisher}></Route>
          <Route path="/add-publisher" component={AddPublisher}></Route>
          <Route path="/view-publisher/:publisherId" component={ViewPublisher}></Route>

          <Route path="/suggestedbooks" component={SuggestedBooks}></Route>
          <Route path="/update-suggestedbooks/:id" component={UpdateSuggestedBooks}></Route>
          <Route path="/add-suggestedbooks" component={AddSuggestedBooks}></Route>
          <Route path="/view-suggestedbooks/:id" component={ViewSuggestedBooks}></Route>

      

       
      
      </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
