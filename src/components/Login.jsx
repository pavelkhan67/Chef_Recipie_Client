import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {signIn, googleSignIn, githubSignIn} = useContext(AuthContext); 
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/category/0'
    
    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        setSuccess('');

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            navigate(from, { replace: true })
            if(loggedUser.email != email){
                setError("Email, Password Invalid.");
                return;
            }
            setSuccess('User login Successful.')
            form.reset();
        })
        .catch(error => {
            console.log(error);
        })

    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            navigate(from, { replace: true })
        })
        .catch(error => console.log(error))
    }
    const handleGithubSignIn = () =>{
        githubSignIn()
        .then(result => {
            const loggedUser = result.user;
            navigate(from, { replace: true })
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold pt-5 pb-1">Please Login !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <p className='text-xs text-left'>New to Savoury Cafe?<Link to="/register" className="label-text-alt link link-hover text-blue-500"> Please Register.</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <button onClick={handleGoogleSignIn} className="btn btn-primary">Sign In with Google</button>
                        <button onClick={handleGithubSignIn} className="btn btn-primary">Sign In with Github</button>
                    </form>
                </div>
                <p className='text-error'>{error}</p>
            <p className='text-success'>{success}</p>
            </div>
        </div>
    );
};

export default Login;