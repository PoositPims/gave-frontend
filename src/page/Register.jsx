import React from 'react'
import "./Register.css";
import {Link} from "react-router-dom";

function Register() {
    return (
        <div className='Register' >
            {/* <div className = 'navLogo'><h1>Gave</h1>
            <h1>Login</h1>
            </div> */}
            <header className='headRegister'>
                <div className ='container'>
                <div className="branding"><h1>GAVE <span>เข้าสู่ระบบ</span></h1></div>
                
                <Link className= 'buttonEffect' to="/ContactUs">
                <nav><h3>ต้องการความช่วยเหลือ ?</h3></nav>
                </Link>
               
                </div>
            </header>
           
            <section className="showcaseRe">
                <div class="container">
                    <h1>เข้าสู่ระบบเพื่อดีลที่โดนใจ !</h1>                     
                    <div className="whiteBox">       
                    <div className='insideWhiteBox'>            
                       
                        <div className = 'register'>
                        
                        {/* <div className='name'> */}

                        <div className='realName'>
                        <div className='realName2'>
                        <label htmlFor="">ชื่อจริง :</label> <br/>
                        </div>
                        <input class = 'nameInput' type="realName" name = "realName" /> <br />
                        </div>

                        <div class ='surName'>
                        <div class ='surName2'>
                        <label htmlFor="">นามสกุล :</label> <br />
                        </div>                      
                        <input class = 'surNameInput' type="surName" name = "surName" />
                        </div>
                        {/* </div> */}

                        <div className='phoneNumber'>
                        <div className='phoneNumber2'>
                        <label htmlFor="">เบอร์โทรศัพท์ :</label> <br/>
                        </div>
                        <input class = 'numberInput' type="phoneNumber" name = "phoneNumber" /> <br />
                        </div>
                        
                        <div className='email'>

                        <div className='email2'>
                        <label htmlFor="">อีเมล :</label> <br/>
                        </div>
                        <input class = 'emailInput' type="email" name = "email" /> <br />
                        </div> 


                        <div className='password'>

                        <div className='password2'>
                        <label htmlFor="">รหัสผ่าน :</label> <br/>
                        </div>
                        <input class = 'passwordInput' type="password" name = "password" /> <br />
                        </div>

                        <div className='confirmPassword'>
                        <div className='confirmPassword2'>
                        <label htmlFor="">ยืนยันรหัสผ่าน :</label> <br/>
                        </div>
                        <input class = 'confirmPassword' type="confirmPassword" name = "confirmPassword" /> <br />
                        </div>  
                        

                        </div>

                    <div className='alternative'>
                        <div className='alternativeWord'>
                            <h3>หรือ เข้าสู่ระบบผ่าน</h3>
                        </div>
                        <div className='alterFacebook'>
                        <img src="loginFacebook.png" alt="" />
                        </div>
                        <div className='alterGoogle'>
                        <img src="loginGoogle.jpg" alt="" />
                        </div>
                        </div> 
                    </div>
                        <div className='registerButton'>
                            <button className='xxx'>สมัครเลย</button>
                        </div>
                </div>
                </div>
            </section>
            {/* <button><Link to="/homepage">Homepage</Link></button>  ที่พี่ซันสอน.............. */}
            <footer className='footRegister'>
                <p>Copyright © 2021, GAVE Thailand</p>
            </footer>
        </div>
    )
}

export default Register

