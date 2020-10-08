import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./pages/posts";
import AllPosts from "./pages/AllPosts";
import PostData from "./pages/PostData";
import NoMatch from "./pages/NoMatch";
import ButtonAppBar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";



function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <ButtonAppBar/>
        <Switch>
          
          <Route exact path={["/"]}>
            <Login />
          </Route>
          <Route exact path="/signup" component={SignUp} />
          
          <PrivateRoute exact path="/posts" component={Posts} />
          
          <PrivateRoute exact path="/posts/:id">
            <PostData />
          </PrivateRoute>
          <PrivateRoute exact path="/AllPosts">
            <AllPosts />
          </PrivateRoute>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;