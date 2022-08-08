

function loginForm() {


    return(
        <>

            <div className='loginFormContainer'>

                    <div className='loginFormTitle'>
                        <a href='/'>여행중</a>
                    </div>

                    <div className='inputContainer'>
                        <label for='id'>I-D </label>
                        <input type='text' id='id'></input>
                        <br></br>

                        <label for='password'>PW </label>
                        <input type='password' id='password'></input>
                    </div>

                    <div className='loginButtonContainer'>
                        <button className='loginButton'>로그인</button>
                    </div>
            </div>
        </>
    )
}


export default loginForm;