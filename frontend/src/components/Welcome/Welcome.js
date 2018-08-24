import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../../style/Welcome/main.scss';
import { CSSTransition } from 'react-transition-group';

import Login from './Login';
import SignUp from './SignUp';

class Welcome extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isSignUpForm : true
        }
        this.loginFormUpdate = this.loginFormUpdate.bind(this);
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
                    <SignUp onUpdate={this.loginFormUpdate}/>
                </CSSTransition>
                <CSSTransition 
                    in={!this.state.isSignUpForm} 
                    timeout={1000} 
                    classNames="login">
                     <Login onUpdate={this.loginFormUpdate}/>
                </CSSTransition>
            </div>
        )
    }
}

export default Welcome;
