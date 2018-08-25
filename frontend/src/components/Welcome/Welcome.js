import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../../style/Welcome/main.scss';
import { CSSTransition } from 'react-transition-group';

// sub components

import Login from './Login';
import SignUp from './SignUp';

// stores

import {observer} from 'mobx-react';
import usersStore from '../../store/UsersStore';

 @observer class Welcome extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isSignUpForm : true
        }
        this.loginFormUpdate = this.loginFormUpdate.bind(this);
    }

    componentDidMount() {
        usersStore.getUsers();
    }

    loginFormUpdate() {
        if(this.state.isSignUpForm){
            this.setState(
                {
                isSignUpForm : false
                }
            )
        }else{
            this.setState(
                {
                isSignUpForm : true
                }
            ) 
        }
        
    }

    render() {
        return (
            <div className="container-fluid page">
                <CSSTransition 
                    in={this.state.isSignUpForm} 
                    timeout={1000} 
                    classNames="signup">
                    <SignUp store={usersStore} onUpdate={this.loginFormUpdate}/>
                </CSSTransition>
                <CSSTransition 
                    in={!this.state.isSignUpForm} 
                    timeout={1000} 
                    classNames="login">
                     <Login store={usersStore} onUpdate={this.loginFormUpdate}/>
                </CSSTransition>
            </div>
        )
    }
}

export default Welcome;
