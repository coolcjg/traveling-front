import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { counterReducer } from "./reducer/count";
import {connect} from 'react-redux'
import {increment, decrement} from './actions/count';

const Nav = (state) => {

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
        setAccessToken(localStorage.getItem('accessToken'));
    }, [accessToken]);

    return(
        <nav className='nav'>
            <div className='content'>
                <ul className='list'>
                    <li className='item'><a href="/">홈{state.value}</a></li>
                    <li className='item'><a href="/info">여행 정보</a></li>
                    <li className='item'><a href="/">사진</a></li>
                    <li className='item'><a href="/">동영상</a></li>
                </ul>
            </div>
            { true ?
            <div className='loginContainer'>
            <button className='navButton' onClick={state.onIncrement}>가입</button>
            <button className='navButton' onClick={state.onDecrement}>로그인</button>
            </div> : 
            <button className='navButton' onClick={logout}>로그아웃</button>
            }

        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        value: state.counter.value
    }
}


export default connect(mapStateToProps)(Nav);