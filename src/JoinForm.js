import { useEffect, useState, useRef } from "react";
import axios from 'axios';
import {sha256} from 'js-sha256';


const JoginForm = () => {

    const [id, setId] = useState('');
    const [idSpan, setIdSpan] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordSpan, setPasswordSpan] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailSpan, setEmailSpan] = useState('');
    const [passwordSHA, setPasswordSHA] = useState('');

    const idInput = useRef();
    const password1Input = useRef();
    const password2Input = useRef();
    const nameInput = useRef();

    function checkId(param){

        setId(param);

        axios({
            url: 'http://localhost:5000/user/checkId', // 통신할 웹문서
            method: 'post', // 통신할 방식
            headers: { 'content-type': 'application/json', 'Pragma': 'no-cache'},
            dataType: "json",
            data: { 
              id: param,
            }

        }).then(response =>{
            if(response.data.result >= 1){
                setIdSpan('이미 존재하는 아이디입니다.');
            }else{
                setIdSpan('');
            };
        })

    }

    useEffect(()=>{

        if(password1 !== '' && password2 !== ''){
            if(password1 !== password2){
                setPasswordSpan('비밀번호를 다시 확인해주세요.');
            }else{
                setPasswordSpan('');
            } 
        }

    }, [password1, password2]);


    function checkEmail(email){

        setEmail(email);

        var regexEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

        if(regexEmail.test(email) !== true){
            setEmailSpan('적합한 이메일이 아닙니다');
            return;
        }else{
            setEmailSpan('');
        }
    }

    function checkForm(){

        if(id === ''){
            alert('아이디를 입력해주세요.');
            idInput.current.focus();
            return;
        }

        if(password1 === ''){
            alert('비밀번호를 입력해주세요.');
            password1Input.current.focus();
            return;
        }

        if(password1 !== password2){
            alert('비밀번호를 확인해주세요.');
            password2Input.current.focus();
            return;
        }

        if(name === ''){
            alert('이름을 입력해주세요');
            nameInput.current.focus();
            return;
        }
        
        checkEmail(email);
        
        setPasswordSHA(sha256.hmac(id, password1));
    }


    const isMounted = useRef(false);
    useEffect(()=>{
        if(isMounted.current){
            axios({
                url: 'http://localhost:5000/user/insertUser', // 통신할 웹문서
                method: 'post', // 통신할 방식
                headers: { 'content-type': 'application/json', 'Pragma': 'no-cache'},
                dataType: "json",
                data: {
                    id:id
                    ,password:passwordSHA
                    ,name:name
                    ,email:email
                }

            }).then(response =>{
                if(response.data.result !== ''){
                    alert('가입 성공');
                }else{
                    alert('가입 실패');
                };
            })        
        }else{
            isMounted.current = true;
        }
    }, [passwordSHA]);

    return(
        <>
            <div className='joinFormContainer'>

                    <div className='joinFormLogo'>
                        <a href='/'>여행중</a>
                    </div>

                    <div className='joinFormTitle'>
                        <h3>회원가입</h3>
                    </div>

                    <div className='inputContainer'>

                        <div>
                            <label htmlFor='id'>아이디 </label>
                            <div>
                            <input type='text' id='id' onChange={(e) => checkId(e.target.value)} ref={idInput}></input>
                            </div>
                            <span>{idSpan}</span>
                        </div>
                        
                        <div>
                            <label htmlFor='password1'>비밀번호 </label>
                            <div>
                            <input type='password1' id='password1' value={password1} onChange={(e) => setPassword1(e.target.value)} ref={password1Input}></input>
                            </div>
                        </div>

                        <div>
                            <label htmlFor='password2'>비밀번호 확인 </label>
                            <div>
                            <input type='password2' id='password2' ref={password2Input} onChange={(e) => setPassword2(e.target.value)}></input>
                            </div>
                            <span>{passwordSpan}</span>
                        </div>

                        <div>
                            <label htmlFor='name'>이름 </label>
                            <div>
                            <input type='name' id='name' ref={nameInput} onChange={(e) => setName(e.target.value)}></input>
                            </div>
                        </div>

                        <div>
                            <label htmlFor='email'>이메일 </label>
                            <div>
                            <input type='email' id='email' onChange={(e) => checkEmail(e.target.value)}></input>                        
                            </div>
                            <span>{emailSpan}</span>
                        </div>

                    </div>

                    <div className='joinButtonContainer'>
                        <button className='joinButton' onClick={checkForm}>가입</button>
                    </div>
            </div>
        </>
    )
}

export default JoginForm;