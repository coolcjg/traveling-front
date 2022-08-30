import { useEffect, useState, useRef } from "react";
import axios from 'axios';
import {sha256} from 'js-sha256';
import setAuthorizationToken from "./jwt/setAuthorizationToken";

const LoginForm = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordSHA, setPasswordSHA] = useState('');
    
    function login(){
        setPasswordSHA(sha256.hmac(id, password));
    }

    const isMounted = useRef(false);
    useEffect(()=>{
        if(isMounted.current){

            axios({
                url: 'http://localhost:5000/user/login', // 통신할 웹문서
                method: 'post', // 통신할 방식
                headers: { 'content-type': 'application/json', 'Pragma': 'no-cache'},
                dataType: "json",
                data: { 
                  id: id,
                  password: passwordSHA
                }
            }).then(response =>{
                console.log("응답");
                console.log(response);
                if(response.data.result === 1){
                    //localStorage.setItem('accessToken', response.data.accessToken);
                    //localStorage.setItem('refreshToken', response.data.refreshToken);
                    setAuthorizationToken(response.data.accessToken);
                    window.location.href="/";
                }
                
            });

       
        }else{
            isMounted.current = true;
        }
    }, [passwordSHA]);    
    


    return(
        <>
            <div className='userFormContainer'>

                <div className='userFormLogo'>
                    <a href='/'>여행중</a>
                </div>

                <div className='userFormTitle'>
                    <h3>로그인</h3>
                </div>

                <div className='inputContainer'>

                    <div>
                        <label htmlFor='id'>아이디 </label>
                        <div>
                        <input type='text' id='id' onChange={(e) => setId(e.target.value)}></input>
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor='password'>비밀번호 </label>
                        <div>
                        <input type='password' id='password' onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                    </div>

                </div>

                <div className='userButtonContainer'>
                    <button onClick={login}>로그인</button>
                </div>
            </div>
        </>
    )
}


export default LoginForm;