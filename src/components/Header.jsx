import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-base-200 flex justify-between">
            <div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Savoury Cafe</Link>
            </div>
            <div className=' flex gap-4 '>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </div>
            <div>
                {
                    user ? <>
                        <div className="tooltip tooltip-left" data-tip={user.displayName}>
                            <button><label className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" >
                                    <img src={user?.photoURL} />
                                </div>
                            </label></button>
                        </div>
                        <button onClick={handleLogOut} className='btn btn-xs ms-3 rounded-full'>Sign Out</button>
                    </> : <> <NavLink to="/login"><button className='btn btn-circle w-16 btn-primary'>Login</button></NavLink> </>
                }
            </div>
        </div>
    );
};

export default Header;