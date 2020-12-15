import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginPage } from '../components/login/LoginPage';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const {user: {logged}} = useContext(AuthContext);
    return (
        <Router basename="/heros-app-react" >
          <div>

            <Switch>
              <PublicRoute 
                isAuthenticated={logged}
                exact path="/login" 
                component={LoginPage}/>
              <PrivateRoute 
                path="/" 
                component={DashboardRoutes}
                isAuthenticated={logged}
              />
            </Switch>
          </div>
        </Router>
      );
}
