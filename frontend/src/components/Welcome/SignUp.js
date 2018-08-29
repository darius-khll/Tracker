import React , {Component} from 'react';

export default class SignUp extends Component{

    constructor(props){
        super(props);
        this.state = {
            username : '',
            email: '',
            password: '',
            usernameUpdated: false,
            emailUpdated: false,
            passwordUpdated: false
        }
    }

    formValidate() {
        if(this.props.store.signUpValidation(this.state.username , this.state.email)){
            this.props.store.addUser(this.state.username ,this.state.email , this.state.password)
        }

    }

    render() {
        return (
            <div className="row justify-content-center main">
                        <div className="col col-md-6 col-sm-8 col-xs-12 align-items-center">
                            <div className=" registration-main-box">
                                <h2 className="header">Sign Up</h2>
                                <div className="text-input-container">
                                    <input id="username" className={"text-input " + (this.state.username.length === 0 && this.state.usernameUpdated ? 'empty' : 'filled')} onChange={(e) => this.setState({username : e.target.value,usernameUpdated : true})} type="text" value={this.state.username} placeholder="Username" autoComplete="off"/>
                                    <label htmlFor="username"></label>
                                </div>
                                <div className="text-input-container">
                                    <input id="email" className={"text-input " + (this.state.email.length === 0 && this.state.emailUpdated ? 'empty' : 'filled')} onChange={(e) => this.setState({email : e.target.value,emailUpdated : true})} type="email" value={this.state.email} placeholder="Email" autoComplete="off"/>
                                    <label htmlFor="email"></label>
                                </div>
                                <div className="text-input-container">
                                    <input id="password" className={"text-input " + (this.state.password.length === 0 && this.state.passwordUpdated ? 'empty' : 'filled')} onChange={(e) => this.setState({password : e.target.value,passwordUpdated: true})} value={this.state.password} type="password" placeholder="Password" autoComplete="off"/>
                                    <label htmlFor="password"></label>
                                </div>
                                <div className="text-input-container">
                                    <div className="row justify-content-center">
                                        <div className="col col-md-6 col-sm-6 col-xs-12 justify-content-center">
                                            <button onClick={() => this.formValidate()} className="primary-button" >Sign up</button>
                                        </div>
                                        <div className="col col-md-6 col-sm-6 col-xs-12 content-box">
                                            Already have an account? 
                                            <span className="internal-link" onClick={() => this.props.onUpdate()}> Login</span>  
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