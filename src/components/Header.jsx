import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(()=> {

        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="navbar bg-indigo-200 flex justify-between">
            <div>
                <a className="btn btn-ghost normal-case text-xl">Savoury Cafe</a>
            </div>
            <div className=' flex gap-4 text-purple-900'>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                { user && <Link to="/profile">Profile</Link>}
            </div>
            <div>
                {
                    user ? <><label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL}/>
                    </div>
                  </label>
                        <button onClick={handleLogOut} className='btn btn-xs ms-3 rounded-full'>Sign Out</button>
                    </> : <> <Link to ="/login"><button className='btn btn-sm'>Login</button></Link> </>
                }
            </div>
        </div>
    );
};

export default Header;