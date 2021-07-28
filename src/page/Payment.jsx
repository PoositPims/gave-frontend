import React from 'react'
import "./Payment.css"
import {Link} from "react-router-dom";

function Payment() {
    return (
        <div>
            <div className='allBodyPayment'>
            <header className='headCard'>
                <div className ='containerCard'>                
                <div className="brandingCard"><h1>GAVE ชำระเงิน</h1></div>     
                <nav className='Home'>
                    <div className='menuCard'>
                    <ul>

                    <li><Link  className='buttonEffect'  to="/Sales">
                    ขายสินค้ากับ GAVE
                      </Link></li>

                    <li>การแจ้งเตือน</li>
                    <li> <Link className='buttonEffect' to="/Register">สมัครสมาชิก</Link></li>
                    <li><Link className='buttonEffect' to="/Register">เข้าสู่ระบบ</Link></li>  
                    
                    </ul>
                    </div>
                    <div className='searchCard'><form action="">                           
                <input className = 'supportCard' type="support" name = "support" placeholder='Search help topics' /> <br />
                <button className='sentButtonCard' type='submit'>Sent</button>
                </form></div>              
                </nav>                
                </div>              
            </header>

            <div className='bigHead'>
                <h2>สินค้าทั้งหมด 1 รายการ</h2>
            </div>
            
          <div className='twoSide'>  
          <section className='paymentMethod'>
              <div className='methodHead'>
                  <h2>วิธีการชำระเงิน</h2>
              </div>

              <div className='checkBoxMethod'>
              <div className='checkBox'>
                <input type="checkbox" />
                <label> Credit / Debit Card</label>
                </div>
              </div>

              <div className='payByCard'>

              <input className = 'inputInfoLong' type="support" name = "support" placeholder='ชื่อที่ปรากฏบนบัตร' /> 
              
              <div className='cardNumber'>
              <input className = 'inputInfoLong' type="support" name = "support" placeholder='เลขบัตร' />
              <div className='pictureCard'>
              <img src="visa.png" alt="" /> 
              <img src="Mastercard.jpg" alt="" /> 
              <img src="jcb.png" alt="" /> 
              </div>
              </div>              

              <div className='detailCard'>      
                <div className='exp'>
                <div className='detailCardInfo'>                   
                    <p>วันหมดอายุ</p>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='ดด / ปป' /> 
                </div>
                
                <div className='cvv'>
                <div className='detailCardInfo'>                   
                    <p>CVV</p>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='000' /> 
                </div>
                  </div>

            <div className='address'>
              <input className = 'inputInfoLong' type="support" name = "support" placeholder='ที่อยู่' />              
              </div>  
              
            <div className='postCode'>
              <input className = 'inputInfoLong' type="support" name = "support" placeholder='รหัสไปรษณีย์' />              
              </div>   
              </div>

              <div className='checkBoxMethod'>
              <div className='checkBox'>
                <input type="checkbox" />
                <label>Gave Pay</label>
                </div>
              </div>

              <div className='checkBoxMethod'>
              <div className='checkBox'>
                <input type="checkbox" />
                <label>ชำระเงินผ่าน ATM</label>
                </div>
              </div>

              <div className='checkBoxMethod'>
              <div className='checkBox'>
                <input type="checkbox" />
                <label>ชำระเงินปลายทาง</label>
                </div>
              </div>                   
          </section>

          <section className='paySummary'>
          <div className='methodHead'>
                  <h2>สรุปคำสั่งซื้อ</h2>
              </div>

              <div className='sumPrice'>
                  <div className='sumPriceWord'>
              <p>ยอมรวม ( 1 รายการ)</p>
                  </div>
                  <div className='sumPriceNum'>
              <p>THB 480</p>
                  </div>
              </div>

              <div className='sumPrice'>
            <div className='sumPriceWord'>
              <p>ยอมรวมทั้งสิ้น</p>
            </div>
            <div className='sumPriceNum'>
              <p>THB 480</p>
              <div className='discountPayment'>20% off</div>       
            </div>
              </div>
              <div className='buttonPay'>
            <button className='continuePay'>ชำระเงิน</button>
              </div>
          </section>
          </div>

          <footer className='footContactUs'>
                <p>Copyright © 2021, GAVE Thailand</p>
            </footer>

            </div>            
        </div>
    )
}

export default Payment
