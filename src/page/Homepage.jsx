import React from "react";
import "./Homepage.css"
import {Link} from "react-router-dom";

function Homepage() {
  return <div>    
    <section className='head'>
      <header className='homeHead'>         
          <div className='containerHome'>
            <div className='navHome'>
          <nav>
                  <div className='menuHome'>
                    <ul>
                    <li>ขายสินค้ากับ GAVE</li>
                    <li>การแจ้งเตือน</li>
                    <li>สมัครสมาชิก</li>
                    <li>เข้าสู่ระบบ</li>
                    </ul>
                  </div>                                
                  </nav> 
                  </div>
      <div className="brandingHome">
        <h1>GAVE</h1>
        <div className='middleHead'>                            
                  <h3>สงขลา</h3> 
                  <div className='searchHome'><form action="">                           
                <input className = 'supportHome' type="support" name = "support" placeholder='ค้นหาดีล, ดีลใกล้เคียง, สินค้า, ร้านค้า' /> <br />
                <button className='sentButtonHome' type='submit'>Sent</button>                  
                </form>
                </div>                 
                  </div> 
                  <div className='homeIcon'>
                    <img src="wallet.png" alt="wallet" />
                    <img src="shopping-cart.png" alt="shopping-cart" />                    
                  </div>                                               
      </div>
      </div>         
      </header>
      </section>
      <section className='bodyHomepage'>
        <div className='bodyAdd'>
          <div className='bodyAdd1'>      
          <img src="flashAd.jpg" alt="apple" />
          </div>    
          <div className='bodyAdd23'>
          <div className='bodyAdd2'>
          <img src="krungthaiAdd.jpg" alt="krungthai" />
          </div> 
          <div className='bodyAdd3'>
          <img src="beyond-meat.jpg" alt="beyond-meat" />
          </div>
          </div>
          </div>
        </section>
        
        <div className='allCategory'>

          <div className='category'>
          <div className='categoryPic' >
          <img src="groceries.png" alt="" />
          </div>
          <h5>อุปโภค บริโภค </h5>
          </div>

          <div className='category'>
          <div className='categoryPic' >
          <img src="customer-service.png" alt="" />
          </div>          
          <h5>บริการต่าง ๆ</h5>          
          </div> 

          <div className='category'>
          <div className='categoryPic'>
          <img src="burger.png" alt="" />
          </div>          
          <h5>อาหารและเครื่องดื่ม</h5>          
          </div>       

          <div className='category'>
          <div className='categoryPic'>
          <img src="flight.png" alt="" />
          </div>          
          <h5>การท่องเที่ยวและประสบการณ์ต่าง ๆ</h5>          
          </div>       

          <div className='category'>
          <div className='categoryPic'>
          <img src="clothes-rack.png" alt="" />
          </div>          
          <h5>เสื้อผ้าและสินค้าแฟชัน</h5>
          </div>       

          <div className='category'>
          <div className='categoryPic'>
          <img src="multiscreen.png" alt="" />
          </div>
          <h5>สินค้าอิเล็กทรอนิกส์</h5>
          </div>       
        </div>

      {/* <section className='registerAd'>
       
      </section> */}

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

      {/* <footer className='footRegister'>
                <p>Copyright © 2021, GAVE Thailand</p>
            </footer> */}
      
  </div>;
}

export default Homepage;
