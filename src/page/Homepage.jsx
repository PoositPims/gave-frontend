import React from "react";
import "./Homepage.css"
import {Link} from "react-router-dom";

function Homepage() {
  return <div> 
    <div className='allBody'>  
    <section className='head'>
      <header className='homeHead'>         
          <div className='containerHome'>
            <div className='navHome'>
          <nav>
                  <div className='menuHome'>
                    <ul>
                      
                    <li><Link  className='buttonEffect'  to="/Sales">
                    ขายสินค้ากับ GAVE
                      </Link></li>

                    <li>การแจ้งเตือน</li>
                    <li> <Link className='buttonEffect' to="/Register">สมัครสมาชิก</Link></li>
                    <li><Link className='buttonEffect' to="/Register">เข้าสู่ระบบ</Link></li>                 
                </ul>
                  </div>                                
                  </nav> 
                  </div>
      <div className="brandingHome">
        
        <Link className= 'buttonEffect2' to='/Homepage'>
        <h1>GAVE</h1>
        </Link>

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
                    <Link  className='buttonEffect' to ="/Card">
                    <img src="shopping-cart.png" alt="shopping-cart" /></Link>                    
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

<section className='bestSold'>
  <div className='suggestPart'>
            <div className='bestsoldHead'>
              <h3>ดีลขายดีประจำสัปดาห์</h3>
            </div>            
            <div className='containerBestsold'>
            <Link  className='buttonEffect' to="/Purchase">
                    <div className='bestsoldItem'>
                        <img src="bottle.jpg" alt="น้ำดื่มคริสตัล" />
                        <div className='bestsoldInfo'>
                        <h4>น้ำดื่มคริสตัล</h4>
                        <h5>THB 480 </h5>
                        </div>
                    </div>
                    </Link>                    
                    <div className='bestsoldItem'>
                        <img src="rice.jpg" alt="ข้าวตราฉัตร" />
                        <div className='bestsoldInfo'>
                        <h4>ข้าวตราฉัตรราคาถูก</h4>
                        <h5>THB 99 </h5>
                        </div>
                    </div>
                    

                    <div className='bestsoldItem'>
                        <img src="rice.jpg" alt="ข้าวตราฉัตร" />
                        <div className='bestsoldInfo'>
                        <h4>ข้าวตราฉัตรราคาถูก</h4>
                        <h5>THB 99 </h5>
                        </div>
                    </div>
                    <div className='bestsoldItem'>
                        <img src="rice.jpg" alt="ข้าวตราฉัตร" />
                        <div className='bestsoldInfo'>
                        <h4>ข้าวตราฉัตรราคาถูก</h4>
                        <h5>THB 99 </h5>
                        </div>
                    </div>                    
                </div> 
                </div>            
            </section>

            <section className='dailyRecommend'>

              <div className='recommendItem'>
              
              <div className='dailyHead'>
              <h3>ดีลแนะนำประจำวัน</h3>            
              </div>

              <div className='eachDailyCard'>  

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>
                
                </div> 

                <div className='eachDailyCard'>  

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>
                
                </div> 

                <div className='eachDailyCard'>  

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>

                <div className='dailyCard'>
                  <div className='dailyPic'>
                  <img src="paris.jpg" alt="" />
                  </div>
                  <div className='cardInfo'>
                    <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
                    <h5> THB 40,000</h5>
                  </div>
                </div>
                
                </div> 
                
              </div>
            </section>

      <footer className='footRegister'>
                <p>Copyright © 2021, GAVE Thailand</p>
            </footer>
   </div>    
  </div>;
}

export default Homepage;
