import React from 'react'
import "./Card.css";

function Card() {
    return (
        <div>
            <header>
                <div className ='containerCard'>                
                <div className="brandingCard"><h1>GAVE รถเข็น</h1></div>     
                <nav>
                    <div className='menuCard'>
                    <ul>
                    <li>ขายสินค้ากับ GAVE</li>
                    <li>การแจ้งเตือน</li>
                    <li>สมัครสมาชิก</li>
                    <li>เข้าสู่ระบบ</li>
                    </ul></div>
                    <div className='searchCard'><form action="">                           
                <input className = 'supportCard' type="support" name = "support" placeholder='Search help topics' /> <br />
                <button className='sentButtonCard' type='submit'>Sent</button>
                </form></div>              
                </nav>                
                </div>              
            </header>
            <section className='showcaseCard'>
                <div className='showcaseCardIn'>               
                <h1>คุณมีสินค้าอยู่ในรถเข็น 1 รายการ</h1>
                <div className='boxCard'>
                    <h3 className='water'>รถเข็นของคุณ</h3>
                    <div className='boxCard2'>
                    <div className='waterInside'>
                        <h4>น้ำดื่มตราคริสตัน 1.5 ล. แพ็ค 6 ขวด  10 แพ๊ค ราคาพิเศษ</h4>                        
                        <div class='priceDiscount'>
                        <h3 className='price'>THB 480</h3>                        
                        <div className='discount'>20% off</div>                       
                        </div>
                    </div>
                    </div>                        
                        <img src="https://picsum.photos/180" alt="" />       
                        <div className='navShowcase'>                            
                        <nav>
                            <div className='navShowcase2'>
                            <h5>ขายโดย ร้านสงขลาค้าส่ง</h5>
                            <h5>ลบออก</h5>
                            </div>
                        </nav>                        
                        </div>                 
                    </div>
                    </div>                 
            </section>
        </div> 
    )
}

export default Card
