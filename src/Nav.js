import React, {useState, useEffect} from 'react';

const Nav = () => {

    const [accessToken, setAccessToken] = useState('');

    function loginForm(e){
        e.preventDefault();
        window.location.href='/loginForm';
    }

    function joinForm(e){
        e.preventDefault();
        window.location.href='/joinForm';
    }

    function logout(){
        localStorage.removeItem('accessToken');
        setAccessToken(null);
    }

    useEffect(()=>{
        console.log("실행1");
        console.log('accessToken1 : ' + accessToken);
        setAccessToken(localStorage.getItem('accessToken'));
        console.log('accessToken2 : ' + accessToken);
    }, [accessToken]);

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
            { accessToken === null ?
            <div className='loginContainer'>
            <button className='navButton' onClick={joinForm}>가입</button>
            <button className='navButton' onClick={loginForm}>로그인</button>
            </div> : 
            <button className='navButton' onClick={logout}>로그아웃</button>
            }

        </nav>
    );
}

export default Nav;