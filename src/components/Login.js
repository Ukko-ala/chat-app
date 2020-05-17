import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null
        }
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
            const {email, password, error} = this.state;
            return(
                <div className="auth-container">
                    <h1>Login</h1>
                    <p>Login to access your account</p>
                    {error && <p className="error-message">{error.message}</p>}
                   <form onSubmit={this.handleSubmit}>
                         
                         <label htmlFor="email">Email address </label>
                         <input type="text" name="email" id="email" value={email} onChange={this.handleChange}></input>
                         <label htmlFor="password">password </label>
                         <input
                             type="password"
                             name="password"
                             id="password"
                             value={password}
                             onChange={this.handleChange}>
                         </input>
                         <button variant="info" className="submit">Login</button>
                         <p>Don't have an account?<Link className="login-btn" to="/register">Register here</Link></p>
                    </form>
                </div>
            );
        }
    }
export default Login;