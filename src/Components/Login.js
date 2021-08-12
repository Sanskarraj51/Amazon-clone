import { Button } from '@material-ui/core';
import React from 'react';
import { actionTypes } from '../reducer';
import { auth, provider } from '../Firebase';

import { useStateValue } from '../StateProvider';
import "./Login.css";
import { useHistory } from 'react-router';






function Login() {

    let history = useHistory();

    const [{},dispatch] = useStateValue();
        
    const signIn =() => {
       auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type : actionTypes.SET_USER,
                user : result.user,
                
            });
            history.push("/")
        

        }).catch((error=>(alert(error.message))));

    };




    return ( 

        <div  className="login">
            <div className=  "login__container" >

                <img src="https://kfinancial.com/wp-content/uploads/2019/02/amazon-logo-vector-png-vector-png-free-amazon-logos-705.jpg" alt="" />

                <div className="login__text ">
                    <h1>Sign In to Amazon</h1>
                </div>
                <Button type="submit" onClick={signIn} >

                    Sign In With Google

                </Button>
            </div>

        </div>
    )
}

export default Login;
