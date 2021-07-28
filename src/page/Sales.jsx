import React from 'react'
import "./Sales.css"
import {Link} from "react-router-dom";

function Sales() {
    return (
        <div>
            <div className='allBodySales'>
            <header className='headCard'>
                <div className ='containerCard'>                
                <div className="brandingCard"><h1>GAVE ขาย</h1></div>     
                <nav className='Home'>
                    <div className='menuCard'>
                    <ul>
                    <li><Link className='buttonEffect'  to="/Sales">ขายสินค้ากับ GAVE</Link></li>
                    <li>การแจ้งเตือน</li>
                    <li> <Link className='buttonEffect' to="/Register">สมัครสมาชิก</Link></li>
                    <li><Link className='buttonEffect' to="/Register">เข้าสู่ระบบ</Link></li>
                    </ul></div>                                
                </nav>                
                </div>              
            </header>
            
            <div className='bigHead'>
                <h2>ลงขายสินค้า</h2>
            </div>

            <section className='generalInfo'>
                <div className='gerneralHead'>
                <h2>ข้อมูลทั่วไป</h2>
                </div>

                <div className='eachTopic'>
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3>ชื่อสินค้า</h3>
                </div>
                {/* <div className='productName2'> */}
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/120' /> 
                {/* <br /> */}
                {/* </div> */}
                </div>
                </div>
                

                <div className='eachTopic'>
                <div className='categorieSales'>
                <div className='categorieSales2'>                   
                    <h3>หมวดหมู่สินค้า</h3>
                </div>
                {/* <div> */}
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='ค้นหาหมวดหมู่สินค้า' /> 
            {/* <br /> */}
                {/* </div> */}
                </div>
                </div>

                <div className='eachTopic'>
                    <div className='bigSalesPicture'>

                    <div className='salesPicture'>                   
                    <h3>รูปภาพสินค้า</h3>
                    </div>
                    
                    <div className='eachPictureBox'>
                    <div className='inputPictureSales'>
                        <div className='inputEach'>
                            <img src="add.png" alt="" />                            
                        </div>
                        <p>ภาพปก</p>                        
                    </div>

                    <div className='inputPictureSales'>
                        <div className='inputEach'>
                            <img className='inputEachImg' src="add.png" alt="" />                            
                        </div>
                        <p>ภาพที่ 1</p>                        
                    </div>

                    <div className='inputPictureSales'>
                        <div className='inputEach'>
                            <img src="add.png" alt="" />                            
                        </div>
                        <p>ภาพที่ 2</p>                        
                    </div>

                    <div className='inputPictureSales'>
                        <div className='inputEach2'>
                            <img src="add.png" alt="" />                            
                        </div>
                        <p>เพิ่มรูปภาพ</p>                        
                    </div>
                    </div>  
                    </div>
                </div>
                
                <div className='eachTopic'>
                <div className='salesVideo'>                   
                    <h3>วิดีโอสินค้า</h3>
                    <div className='videoOptional'>
                    <h3>( Optional )</h3>
                    </div>
                    </div>

                    <div className='eachPictureBox'>
                    <div className='inputPictureSales'>
                        <div className='inputEach'>
                            <img src="add.png" alt="" />                            
                        </div>
                        <p>วิดีโอสินค้า</p>                        
                    </div>
                    
                    <div className='inputPictureSales'>
                        <div className='inputEach2'>
                            <img src="add.png" alt="" />                            
                        </div>
                        <p>เพิ่มวิดีโอ</p>                    
                    </div>
                    </div>                 
                </div>

                <div className='eachTopic'>
                    <div className='salesDetail'>
                        <h3>รายละเอียดสินค้า</h3>
                    </div>
                    <input className = 'inputInfoVeryLong' type="support" name = "support" placeholder='0/5000' /> <br />

                </div>
                       
            </section>
            
            <section className ='specificInfo'>
            <div className='gerneralHead'>
                <h2>ข้อมูลจำเพาะ</h2>
                </div>

                <div className='eachTopic'>
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3>แบรนด์</h3>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/60' /> 
                </div>

                {/* <div className='productName2'> */}
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3>ขนาด</h3>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/60' /> 
                </div>
                {/* </div> */}
                </div>

                <div className='eachTopic'>
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3>วัสดุ</h3>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/60' /> 
                </div>
                {/* <div className='productName2'> */}
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3>ขนาดบรรจุ</h3>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/60' /> 
                </div>
                {/* </div> */}
                </div>

                 <div className='eachTopic'>
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3>สภาพของสินค้า</h3>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/60' /> 
                </div>
                {/* <div className='productName2'> */}
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3>ปริมาณ</h3>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/60' /> 
                </div>
                {/* </div> */}
                </div>

                <div className='eachTopic'>
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3>สี</h3>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/60' /> 
                </div>
                {/* <div className='productName2'> */}
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3>น้ำหนัก</h3>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/60' /> 
                </div>
                {/* </div> */}
                </div>            
            </section>

            <section className ='salesInfo'>
            <div className='gerneralHead'>
                <h2>ข้อมูลการขาย</h2>
                </div>

                <div className='eachTopic'>
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3>ราคาก่อนดีล</h3>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/60' /> 
                </div>                
                </div>

                <div className='eachTopic'>
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3>คลัง</h3>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/60' /> 
                </div>                
                </div>

                <div className='eachTopic'>
                <div className='salesPicture'>                   
                    <h3>รูปภาพสินค้า</h3>
                    </div>
                    <div className='eachPictureBox'>
                    <div className='inputPictureSales'>
                        <div className='inputEach'>
                            <img src="add.png" alt="" />                            
                        </div>
                        <p>SKU 1</p>                        
                    </div>

                    <div className='inputPictureSales'>
                        <div className='inputEach2'>
                            <img src="add.png" alt="" />                            
                        </div>
                        <p>เพิ่ม SKU</p>                        
                    </div>                 
                    </div>
                    </div>
            </section>

            <section className='dealInfoSeles'>
            <div className='gerneralHead'>
                <h2>ข้อมูลดีล</h2>
                </div>

                <div className='eachTopic'>
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3>สถานที่ที่เข้าร่วมดีล</h3>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/60' /> 
                </div>                
                </div>

                <div className='eachTopic'>
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3>ระยะเวลาสิ้นสุดดีล</h3>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/60' /> 
                </div>                
                </div>

                <div className='eachTopic'>
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3 >จำนวนผู้ซื้อขั้นต่ำถึงจะเกิดดีล</h3>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/60' /> 
                </div>                
                </div>

                <div className='eachTopic'>
                <div className='productName'>
                <div className='nameSales'>                   
                    <h3>ราคาที่เข้าร่วมดีล</h3>
                </div>
                <input className = 'inputInfoLong' type="support" name = "support" placeholder='0/60' /> 
                </div>                
                </div>

                <div className='eachTopic'>
                <div className='salesPicture'>                   
                    <h3>ตัวเลือกดีลเพิ่มเติม</h3>
                    </div>
                    <div className='eachPictureBox'>
                    <div className='inputPictureSales'>
                        <div className='inputEach'>
                            <img src="add.png" alt="" />                            
                        </div>
                        <p>ดีล 1</p>                        
                    </div>

                    <div className='inputPictureSales'>
                        <div className='inputEach2'>
                            <img src="add.png" alt="" />                            
                        </div>
                        <p>เพิ่มดีล</p>                        
                    </div>                 
                    </div>
                    </div> 
            </section>

            <section className='deliverSales'>
            <div className='gerneralHead'>
                <h2>การจัดส่งสินค้า</h2>
                </div>

                <div className='eachTopic'>
                <div className='communityLeader'>

                {/* <div className='checkBox'>                */}
                <input type="checkbox" />
                <label>กระจายสินค้าผ่าน community leader</label>
                
                <div className='warningDelivery'>
                <p>*จะต้องส่งภายใน 5 วัน หลังจากที่สิ้นสุดดีล</p>
                </div>                
                {/* </div> */}
                </div>
                </div>
                
                <div className='eachTopic'>
                <div className='deliveryCheckBox'>

                <div className='checkBox'>
                <input type="checkbox" />
                <label>ส่งผ่าน delivery company</label>
                </div>


                <div className='delvieryBrandsales'>

{/* <div className='boxxx'> */}
                <div className='checkBox'>
                <input type="checkbox" />
                <label>Thailand Post</label>
                </div>

                <div className='checkBox'>
                <input type="checkbox" />
                <label>Flash Express</label>
                </div>

                <div className='checkBox'>
                <input type="checkbox" />
                <label>Kerry Express</label>
                </div>

                <div className='checkBox'>
                <input type="checkbox" />
                <label>J & T Express</label>
                </div>
                    
                {/* </div> */}
                </div>             
                </div>
                </div>
            </section>

            <section className='salesButton'>
                <div className='eachButton'>
                    <div>
                <button className='cancelButton'>ยกเลิก</button>
                    </div>
                    <div>
                <button className='saveHideButtin'>บันทึกและซ่อน</button>
                    </div>
                    <div>
                <button className='saveSellButton'>บันทึกและขาย</button>            
                    </div>
                </div>
            </section>
            
            <footer className='footContactUs'>
                <p>Copyright © 2021, GAVE Thailand</p>
            </footer>
            </div>
        </div>
    )
}

export default Sales
