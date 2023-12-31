import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const from =  '/login'

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;


        if (!/.{6,}/.test(password)) {
            setError("Pass: Minimum six characters");
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setError('')
                form.reset();
                updateUserData(createdUser, name, photo)
                handleLogOut()
                navigate(from, { replace: true })
                toast.success("User Created Successful!")

            })
            .catch(error => {
                console.log(error);
            })
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName : name,
            photoURL: photo
        })
        .then(() => {
            console.log("User name, photo updated");
        })
        .catch(error => { 
            setError(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-100 mt-5">
            <div className="hero-content flex-col ">
                <div className="text-center pt-5 pb-1">
                    <h1 className="text-5xl font-bold">Please Register !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo" className="input input-bordered" />
                            <label className="label">
                                <p className='text-sm text-left'>Already have an account? <Link to="/login" className="link link-hover text-blue-500">Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary"> Register</button>
                        </div>
                    </form>
                    <p className='text-error pb-5'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;