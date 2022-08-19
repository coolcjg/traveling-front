import { useEffect } from "react";
import axios from 'axios';


const JoginForm = () => {

    useEffect(() =>{

        document.getElementById('id').addEventListener('focusout', ()=>{
            checkId();
        });

        function checkId(){

            axios({
                url: '', // 통신할 웹문서
                method: 'get', // 통신할 방식
                data: { // 인자로 보낼 데이터
                  foo: 'diary'
                }
              });            

        }

    },[])

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

                        <label htmlFor='id'>아이디 </label>
                        <div>
                        <input type='text' id='id'></input>
                        </div>
                        
                        <label htmlFor='password1'>비밀번호 </label>
                        <div>
                        <input type='password1' id='password1'></input>
                        </div>

                        <label htmlFor='password2'>비밀번호 확인 </label>
                        <div>
                        <input type='password2' id='password2'></input>                        
                        </div>

                        <label htmlFor='name'>이름 </label>
                        <div>
                        <input type='name' id='name'></input>                        
                        </div>

                        <label htmlFor='email'>이메일 </label>
                        <div>
                        <input type='email' id='email'></input>                        
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