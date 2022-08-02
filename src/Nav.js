import React, {useState} from 'react';

const Nav = () => {
    return(
        <nav className='nav'>
            <div className='content'>
                <ul className='list'>
                    <li className='item'>홈</li>
                    <li className='item'>이야기</li>
                    <li className='item'>사진</li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;