import React from 'react'
import "./Card.css";

function Card() {
    return (
        <div>
            <header className='headCard'>
                <div className ='containerCard'>                
                <div className="brandingCard"><h1>GAVE รถเข็น</h1></div>     
                <nav className='Home'>
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
            <div className='twoBox'>
            <section className='showcaseCard'>
                <div className='showcaseCardIn'>               
                <h1>คุณมีสินค้าอยู่ในรถเข็น 1 รายการ</h1>
                <div className='boxCard'>                    
                    <h3 className='water'>รถเข็นของคุณ</h3>
                    <div className='boxCard2'>
                    <div className='waterInside'>
                        <div className="containerCheckBox">
                            <label htmlFor="">
                        <input type="checkbox" />
                        <span class="checkmark" ></span>
                        </label>
                        </div>
                        <h4>น้ำดื่มตราคริสตัน 1.5 ล. แพ็ค 6 ขวด  10 แพ๊ค ราคาพิเศษ</h4>                        
                        <div class='priceDiscount'>
                        <h3 className='price'>THB 480</h3>                        
                        <div className='discount'>20% off</div>                       
                        </div>
                    </div>
                    </div>
                    <div className='pictureAmount'>                    
                        <img src="bottle.jpg" alt="crystal" />                        
                            <h3 className='amount'>จำนวน:</h3>                            
                            <div class='select'>
                            <select name="" id="">
                                <option value="0">เลือกจำนวนแพ๊ค</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            </div>
                            
                            </div>           
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
            {/* อีกกล่องทางขวา......................... */}
            <section className='showcaseBox'>
                <div className='boxPayment'>
                <h3 className='paymentHead'>ชำระเงิน</h3>
                <div className='paymentPrice'>
                <h4 className='paymentH'>ยอดรวม ( 1 รายการ )</h4>                
                <div className='price480'>
                <h4>THB 480</h4>
                </div>
                </div>
                {/* .... */}
                <div className='paymentPrice'>
                <h4 className='paymentH'>ค่าจัดส่ง</h4>
                <div className='dash'>            
                <h4 className='tax'>-</h4>
                </div> 
                </div>
                {/* .... */}
                <div className='paymentPrice'>
                <h4 className='paymentH'>ภาษี</h4>              
                <div className='dash2'>            
                <h4 className='tax'>-</h4>
                </div> 
                </div>
                <div className='searchCode'><form action="">                           
                <input className = 'inputCode' type="support" name = "support" placeholder='โค้ดส่วนลด' /> 
                <button className='buttonCode' type='submit'>Sent</button>
                </form></div>       
                <div className='totalPrice'>
                    <h4 className='paymentH'>ยอดรวมทั้งสิ้น</h4>
                    <div class='priceDiscount'>
                        <h4 className='pricePayment'>THB 480</h4>                        
                        <div className='discountPayment'>20% off</div>                       
                        </div>                        
                </div>
                <div className='startPay'><form action="">
                <button className='payButton' type='submit'>ดำเนินการชำระเงิน</button>
                </form>
                </div>
                {/* <div className='searchCode'><form action="">  
                <button className='buttonCode' type='submit'>Sent</button>
                </form>
                </div>  */}
                </div>   

            </section>
            </div>
            <section className='suggest'>            
            <div className='containerSuggest'>
                    <div className='suggestItem'>                        
                        <img src="rice.jpg" alt="ข้าวตราฉัตร" />
                        <div className='itemInfo'>
                        <h4>ข้าวตราฉัตรราคาถูก</h4>
                        <h5>THB 99 </h5>
                        </div>
                    </div>
                    <div className='suggestItem'>
                        <img src="rice.jpg" alt="ข้าวตราฉัตร" />
                        <div className='itemInfo'>
                        <h4>ข้าวตราฉัตรราคาถูก</h4>
                        <h5>THB 99 </h5>
                        </div>
                    </div>
                    <div className='suggestItem'>
                        <img src="rice.jpg" alt="ข้าวตราฉัตร" />
                        <div className='itemInfo'>
                        <h4>ข้าวตราฉัตรราคาถูก</h4>
                        <h5>THB 99 </h5>
                        </div>
                    </div>
                    <div className='suggestItem'>
                        <img src="rice.jpg" alt="ข้าวตราฉัตร" />
                        <div className='itemInfo'>
                        <h4>ข้าวตราฉัตรราคาถูก</h4>
                        <h5>THB 99 </h5>
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

export default Card
