import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import BestWeeklyDeal from "../components/BestWeeklyDeal";
import CategoryCard from "../components/CategoryCard";

function Homepage() {
  return (
    <div>
      <div className="allBody">
        <section className="head">
          <header className="homeHead">
            <div className="containerHome">
              <div className="navHome">
                <nav>
                  <div className="menuHome">
                    <ul>
                      <li>
                        <Link className="buttonEffect" to="/Sales">
                          ขายสินค้ากับ GAVE
                        </Link>
                      </li>

                      <li>การแจ้งเตือน</li>
                      <li>
                        {" "}
                        <Link className="buttonEffect" to="/Register">
                          สมัครสมาชิก
                        </Link>
                      </li>
                      <li>
                        <Link className="buttonEffect" to="/Register">
                          เข้าสู่ระบบ
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="brandingHome">
                <Link className="buttonEffect2" to="/Homepage">
                  <h1>GAVE</h1>
                </Link>

                <div className="middleHead">
                  <h3>สงขลา</h3>
                  <div className="searchHome">
                    <form action="">
                      <input
                        className="supportHome"
                        type="support"
                        name="support"
                        placeholder="ค้นหาดีล, ดีลใกล้เคียง, สินค้า, ร้านค้า"
                      />{" "}
                      <br />
                      <button className="sentButtonHome" type="submit">
                        Sent
                      </button>
                    </form>
                  </div>
                </div>
                <div className="homeIcon">
                  <img src="wallet.png" alt="wallet" />
                  <Link className="buttonEffect" to="/Card">
                    <img src="shopping-cart.png" alt="shopping-cart" />
                  </Link>
                </div>
              </div>
            </div>
          </header>
        </section>
        <section className="bodyHomepage">
          <div className="bodyAdd">
            <div className="bodyAdd1">
              <img src="flashAd.jpg" alt="apple" />
            </div>
            <div className="bodyAdd23">
              <div className="bodyAdd2">
                <img src="krungthaiAdd.jpg" alt="krungthai" />
              </div>
              <div className="bodyAdd3">
                <img src="beyond-meat.jpg" alt="beyond-meat" />
              </div>
            </div>
          </div>
        </section>

        <div className="allCategory">
          <CategoryCard
            CategoryPic="groceries.png"
            CategoryName="อุปโภค บริโภค"
          />

          <CategoryCard
            CategoryPic="customer-service.png"
            CategoryName="บริการต่าง ๆ"
          />

          <CategoryCard
            CategoryPic="burger.png"
            CategoryName="อาหารและเครื่องดื่ม"
          />

          <CategoryCard
            CategoryPic="flight.png"
            CategoryName="การท่องเที่ยวและประสบการณ์ต่าง ๆ"
          />

          <CategoryCard
            CategoryPic="clothes-rack.png"
            CategoryName="เสื้อผ้าและสินค้าแฟชัน"
          />

          <CategoryCard
            CategoryPic="multiscreen.png"
            CategoryName="สินค้าอิเล็กทรอนิกส์"
          />
        </div>

        {/* <section className='registerAd'>
       
      </section> */}

        <section className="bestSold">
          <div className="suggestPart">
            <div className="bestsoldHead">
              <h3>ดีลขายดีประจำสัปดาห์ </h3>
            </div>
            <div className="containerBestsold">
              <Link className="buttonEffect" to="/Purchase">
                <BestWeeklyDeal
                  productPic="bottle.jpg"
                  productName="น้ำดื่มคริสตัล"
                  productPrice="THB 480"
                />
              </Link>

              <Link className="buttonEffect" to="/Purchase">
                <BestWeeklyDeal
                  productPic="rice.jpg"
                  productName="ข้าวสาร"
                  productPrice="THB 100"
                />
              </Link>
              <Link className="buttonEffect" to="/Purchase">
                <BestWeeklyDeal
                  productPic="vegetable.png"
                  productName="ผักราคาถูก"
                  productPrice="THB 100"
                />
              </Link>
              <Link className="buttonEffect" to="/Purchase">
                <BestWeeklyDeal
                  productPic="dettol.jpg"
                  productName="น้ำยาฆ่าเชื้อ"
                  productPrice="THB 134"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="dailyRecommend">
          <div className="recommendItem">
            <div className="dailyHead">
              <h3>ดีลแนะนำประจำวัน</h3>
            </div>

            <div className="eachDailyCard">
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
            </div>

            <div className="eachDailyCard">
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
            </div>

            <div className="eachDailyCard">
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
              <ProductCard
                productPic="paris.jpg"
                productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
                productPrice="THB 40,000"
              />
            </div>
          </div>
        </section>

        <footer className="footRegister">
          <p>Copyright © 2021, GAVE Thailand</p>
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
