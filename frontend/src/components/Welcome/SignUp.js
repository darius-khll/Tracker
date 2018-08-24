import React , {Component} from 'react';

export default class SignUp extends Component{

    constructor(props){
        super(props);

        this.loginFormUpdate = this.loginFormUpdate.bind(this);
    }

    loginFormUpdate() {
        this.props.onUpdate();
    }

    render() {
        return (
            <div className="row justify-content-center main">
                        <div className="col col-md-6 col-sm-8 col-xs-12 align-items-center">
                            <div className=" registration-main-box">
                                <h2 className="header">Sign Up</h2>
                                <div className="text-input-container">
                                    <input id="username" className="text-input" type="text" placeholder="Username" autocomplete="off"/>
                                    <label htmlFor="username"></label>
                                </div>
                                <div className="text-input-container">
                                    <input id="email" className="text-input" type="email" placeholder="Email" autocomplete="off"/>
                                    <label htmlFor="email"></label>
                                </div>
                                <div className="text-input-container">
                                    <input id="password" className="text-input" type="password" placeholder="Password" autocomplete="off"/>
                                    <label htmlFor="password"></label>
                                </div>
                                <div className="text-input-container">
                                    <div className="row justify-content-center">
                                        <div className="col col-md-6 col-sm-6 col-xs-12 justify-content-center">
                                            <button className="primary-button">Sign up</button>
                                        </div>
                                        <div className="col col-md-6 col-sm-6 col-xs-12 content-box">
                                            Already have an account? 
                                            <span className="internal-link" onClick={this.loginFormUpdate}> Login</span>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="another-login-ways-container">
                                <p>Sign Up with social platforms</p>
                                <div className="row social-platforms-container">
                                    <div className="col">
                                        <span className="fa fa-google-plus"></span>
                                    </div>
                                    <div className="col">
                                        <span className="fa fa-twitter"></span>
                                    </div>
                                    <div className="col">
                                        <span className="fa fa-facebook"></span>
                                    </div>
                                    <div className="col">
                                        <span className="fa fa-linkedin"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
        )
    }
}