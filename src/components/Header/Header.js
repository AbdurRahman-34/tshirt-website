import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h4>Welcome To Tshirt Mania!!</h4>
            <nav className='nav-container'>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview'>Order Review</CustomLink>
                <CustomLink to='/grandpa'>GrandPa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;