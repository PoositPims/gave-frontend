import React from 'react'
import "./Register.css";
import {Link} from "react-router-dom";

function Register() {
    return (
        <div className='Register' >
            {/* <div className = 'navLogo'><h1>Gave</h1>
            <h1>Login</h1>
            </div> */}
            <header>
                <div className ='container'>
                <div className="branding"><h1>GAVE <span>เข้าสู่ระบบ</span></h1></div>
                <nav><h3>ต้องการความช่วยเหลือ ?</h3></nav>
                </div>
            </header>
           
            <section className="showcase">
                <div class="container">
                    <h1>เข้าสู่ระบบเพื่อดีลที่โดนใจ !</h1>                     
                    <div className="whiteBox">       
                    <div className='insideWhiteBox'>            
                        <div className = 'register'>
                        <div className='name'>
                        <div className='realName'>
                        <label htmlFor="">ชื่อจริง :</label> <br/>
                        <input class = 'nameInput' type="realName" name = "realName" /> <br />
                        </div>
                        <div class ='surName'>                      
                        <label htmlFor="">นามสกุล :</label> <br />
                        <input class = 'surNameInput' type="surName" name = "surName" />
                        </div>
                        </div>
                        <div className='phoneNumber'>
                        <label htmlFor="">เบอร์โทรศัพท์ :</label> <br/>
                        <input class = 'numberInput' type="phoneNumber" name = "phoneNumber" /> <br />
                        </div>
                        <div className='email'>
                        <label htmlFor="">อีเมล :</label> <br/>
                        <input class = 'emailInput' type="email" name = "email" /> <br />
                        </div> 
                        <div className='password'>
                        <label htmlFor="">รหัสผ่าน :</label> <br/>
                        <input class = 'passwordInput' type="password" name = "password" /> <br />
                        <label htmlFor="">ยืนยันรหัสผ่าน :</label> <br/>
                        <input class = 'confirmPassword' type="confirmPassword" name = "confirmPassword" /> <br />
                        </div>   
                        </div>                    
                    <div className='alternative'>
                        <div className='alter1'><h1>facebook</h1></div>
                        <div className='alter2'><h1>google</h1></div>
                        <div className='alter3'><h1>line</h1></div>
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

