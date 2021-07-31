// function BestWeeklyDeal(props) {
//   return (
//     <div className="bestsoldItem">
//       <img src="bottle.jpg" alt="น้ำดื่มคริสตัล" />
//       <div className="bestsoldInfo">
//         <h4>น้ำดื่มคริสตัล</h4>
//         <h5>THB 480 </h5>
//       </div>
//     </div>
//   );
// }

// export default BestWeeklyDeal;

function BestWeeklyDeal(props) {
  return (
    <div className="bestsoldItem">
      <img src={props.productPic} />
      <div className="bestsoldInfo">
        <h4>{props.productName}</h4>
        <h5>{props.productPrice}</h5>
      </div>
    </div>
  );
}

export default BestWeeklyDeal;
