import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../style/Welcome.scss'

class Welcome extends Component{
    render() {
        return (
            <div className="container-fluid page">
                <div className="row justify-content-center">
                    <div className="col col-md-6 col-sm-8 col-xs-12 align-items-center registration-main-box">
                        <h2 className="header">Sign Up</h2>
                        <div className="text-input-container">
                            <input id="username" className="text-input" type="text" placeholder="Username"/>
                            <label htmlFor="username"></label>
                        </div>
                        <div className="text-input-container">
                            <input id="email" className="text-input" type="email" placeholder="Email"/>
                            <label htmlFor="email"></label>
                        </div>
                        <div className="text-input-container">
                            <input id="password" className="text-input" type="password" placeholder="Password"/>
                            <label htmlFor="password"></label>
                        </div>
                        <div className="text-input-container">
                            <div className="row justify-content-center">
                                <div className="col col-md-6 col-sm-6 col-xs-12 justify-content-center">
                                    <button className="primary-button">Sign up</button>
                                </div>
                                <div className="col col-md-6 col-sm-6 col-xs-12 content-box">
                                    Already have an account? <a href="">Login</a>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;
