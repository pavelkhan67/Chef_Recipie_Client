import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    // console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
                toast('User LogIn Successful')
                form.reset();
            })
            .catch(error => {
                if(error.message == 'Firebase: Error (auth/wrong-password).'){
                    setError('Wrong Password!')
                }
                else if(error.message == 'Firebase: Error (auth/user-not-found).'){
                    setError('Invalid Email!')
                }
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
                toast('User LogIn Successful')
            })
            .catch(error => console.log(error))
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
                toast('User LogIn Successful')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-100 mt-5">
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
                            <button className="btn btn-primary normal-case text-base">Login</button>
                        </div>
                        <p className='text-error'>{error}</p>
                    </form>
                </div>
                <button onClick={handleGoogleSignIn} className="btn btn-primary w-full normal-case text-base"> <img className='h-6' src="https://www.svgrepo.com/show/327365/logo-google.svg" alt="" /> <span className='ps-5'>Sign In with Google</span></button>
                <button onClick={handleGithubSignIn} className="btn btn-primary w-full normal-case text-base"><img className='h-6' src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" /> <span className='ps-5'>Sign In with Github</span></button>
            </div>
        </div>
    );
};

export default Login;