import React from 'react'
import "./ContactUs.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// library.add(fas, fab, far);
import {Link} from "react-router-dom";

function ContactUs() {
    return (
        <div>            
            <header className='headContact'>
                <div className ='container'>
                <div className="branding"><h1>GAVE <span>ติดต่อเรา</span></h1></div>                
                </div>
            </header>
            <section className="showcase">
            <div className='container'>
                <h1>Customer Support</h1>
            <form action="">                           
                <input className = 'support' type="support" name = "support" placeholder='Search help topics, keywords, etc.' /> <br />
                <button className='sentButton' type='submit'>Sent</button>
                </form>
            </div>
            </section>
            <section className='contactInfo'>
                <div className='boxes'>
                <div className='container'>
                    <div className='chat'>
                    <h2>ติดต่อเราทางแชท</h2>
                    <div className='chatBox'>
                    <h3>แชทกับ GAVE</h3>
                    <h3>แชทเปิดให้บริการตลอด 24 ชั่วโมง</h3>
                    </div>
                    </div>
                    <div className='call'>
                    <h2>ติดต่อเราทางโทรศัพท์</h2>
                    <div className='callBox'>
                    <h3>โทรคุยกับ GAVE</h3>
                    <h3>02-000-0000</h3>
                    <h3>ให้บริการทุกวันจันทร์ - เสาร์ เวลา 8.00 น. ถึง 20.00 น.</h3>              
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className='others'>
                <div className='container'>
                    
                    <h2 className='othersHead'>ติดตาม GAVE ในช่องทางอื่น ๆ</h2>
                    
                    <div className='horAndVerApp'>
                    <div className='appHorizontal'>
                     <a 
                     target="_blank"
                     href="https://www.facebook.com"> 
                    <div className='appHorizontal1'>
                    <img src="facebook.png" alt="" />                    
                    <div><h3>GAVE Thailand</h3></div>
                    </div>
                    </a> 
                     <a 
                     target="_blank"
                     href="https://www.instagram.com/">
                    <div className='appHorizontal2'>
                    <img src="instagram.png" alt="" />                                   
                    <div><h3>GAVE Thailand</h3></div>
                    </div>
                    </a>                    
                    </div>

                    <div className='appVerticle'>

                    <a 
                    target='_blank'
                    href="https://twitter.com/">
                    <div className='appVerticle1'>
                    <img src="twitter.png" alt="" />                        
                    <div><h3>GAVE Thailand</h3></div>
                    </div>
                    </a>

                    <a 
                    target='_blank'
                    href="https://line.me/th/">
                    <div className='appVerticle2'>
                    <img src="line.png" alt="" />                                
                    <div><h3>GAVE.Thailand</h3></div>
                    </div>
                    </a>

                    </div>

                  </div>
                </div>
            </section>           
            <footer className='footContactUs'>
                <p>Copyright © 2021, GAVE Thailand</p>
            </footer>
        </div>
    )
}

export default ContactUs
