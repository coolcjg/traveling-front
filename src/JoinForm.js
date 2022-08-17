

function loginForm() {


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

                        <label for='id'>아이디 </label>
                        <div>
                        <input type='text' id='id'></input>
                        </div>
                        
                        <label for='password1'>비밀번호 </label>
                        <div>
                        <input type='password1' id='password1'></input>
                        </div>

                        <label for='password2'>비밀번호 확인 </label>
                        <div>
                        <input type='password2' id='password2'></input>                        
                        </div>

                        <label for='name'>이름 </label>
                        <div>
                        <input type='name' id='name'></input>                        
                        </div>

                        <label for='email'>이메일 </label>
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

export default loginForm;