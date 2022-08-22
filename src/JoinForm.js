import { useEffect } from "react";
import axios from 'axios';


const JoginForm = () => {

    useEffect(() =>{

        document.getElementById('id').addEventListener('focusout', (e)=>{
            checkId(e.target.value);
        });

        function checkId(id){

            axios({
                url: 'http://localhost:5000/user/checkId', // 통신할 웹문서
                method: 'post', // 통신할 방식
                headers: { 'content-type': 'application/json', 'Pragma': 'no-cache'},
                dataType: "json",
                data: { 
                  id: id,
                }

            }).then(response =>{
                if(response.data.result >= 1){
                    document.getElementById('idSpan').textContent ='이미 존재하는 아이디입니다.';
                }else{
                    document.getElementById('idSpan').textContent ='';
                };

            })

        }
    },[])

    function checkPassword(){
        if(document.getElementById('password1').value !== document.getElementById('password2').value){
            document.getElementById('passwordSpan').textContent ='비밀번호를 다시 확인해주세요.';
        }else{
            document.getElementById('passwordSpan').textContent ='';
        }
    }    

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
                            <input type='text' id='id'></input>
                            </div>
                            <span id='idSpan'></span>
                        </div>
                        
                        <div>
                            <label htmlFor='password1'>비밀번호 </label>
                            <div>
                            <input type='password1' id='password1'></input>
                            </div>
                        </div>

                        <div>
                            <label htmlFor='password2'>비밀번호 확인 </label>
                            <div>
                            <input type='password2' id='password2' onBlur={checkPassword}></input>
                            </div>
                            <span id='passwordSpan'></span>
                        </div>

                        <div>
                            <label htmlFor='name'>이름 </label>
                            <div>
                            <input type='name' id='name'></input>
                            </div>
                            <span>aaa</span>
                        </div>

                        <div>
                            <label htmlFor='email'>이메일 </label>
                            <div>
                            <input type='email' id='email'></input>                        
                            </div>
                            <span>bbb</span>
                        </div>

                    </div>

                    <div className='joinButtonContainer'>
                        <button className='joinButton'>가입</button>
                    </div>
            </div>
        </>
    )
}

export default JoginForm;