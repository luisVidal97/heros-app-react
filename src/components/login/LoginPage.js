import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginPage = ({history}) => {

    const {dispatch} = useContext(AuthContext);
    
    const handleLogin = () =>{
        const lastpath = localStorage.getItem('lastPath') || '/';

        // history.push('/');
        dispatch({
            type: types.login,
            payload: { name: 'Luis'}
        });
        history.replace(lastpath);
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
