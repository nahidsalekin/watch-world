import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import Header from './components/Header/Header';
import WatchDetail from './components/WatchDetail/WatchDetail';
import Footer from './components/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import Register from './components/Login/Register/Register';
import Watches from './components/Watches/Watches';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/watches">
              <Watches></Watches>
            </Route>
            <PrivateRoute path="/watch_detail/:id">
              <WatchDetail></WatchDetail>
            </PrivateRoute>
            <Route path="/place_order/:id/:user">
              <WatchDetail></WatchDetail>
            </Route>
            <Route path="/orders">
              <Orders></Orders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
