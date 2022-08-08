import React, {useState} from 'react';

const Nav = () => {

    function loginForm(e){
        e.preventDefault();
        window.location.href='/loginForm';
    }

    return(
        <nav className='nav'>
            <div className='content'>
                <ul className='list'>
                    <li className='item'><a href="/">홈</a></li>
                    <li className='item'><a href="/info">여행 정보</a></li>
                    <li className='item'><a href="/">사진</a></li>
                    <li className='item'><a href="/">동영상</a></li>
                </ul>
            </div>

            <div className='loginContainer'>
                <button className='loginButton' onClick={loginForm}>로그인</button>
            </div>
        </nav>
    );
}

export default Nav;