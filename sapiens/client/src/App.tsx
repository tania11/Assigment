import React, {FC} from 'react';
import './App.css';
import UserList from './components/UserList';
import { UserInterface } from './interfaces/customInterfaces';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';

const App: FC = () => {

  return (
    <Container fluid style={{margin: '50px auto'}} className="wrapper">
    <Navbar></Navbar>
    <Switch>
        <Route path="/users" component={UserList} />
        <Route path="/addUser" component={UserForm} />
         <Route path="/" component={UserList} exact />
    </Switch>
    </Container>
  );
}

export default App;
