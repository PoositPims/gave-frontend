// function ProductCard(props) {
//   return (
//     <div className="dailyCard">
//       <div className="dailyPic">
//         <img src="paris.jpg" alt="" />
//       </div>
//       <div className="cardInfo">
//         <h4>ดีลท่องเที่ยวฝรั่งเศสกลุ่ม</h4>
//         <h5> THB 40,000</h5>
//       </div>
//     </div>
//   );
// }
// export default ProductCard;

function ProductCard(props) {
  return (
    <div className="dailyCard">
      <div className="dailyPic">
        <img src={props.productPic} />
      </div>
      <div className="cardInfo">
        <h4>{props.productName}</h4>
        <h5>{props.productPrice}</h5>
      </div>
    </div>
  );
}
export default ProductCard;
