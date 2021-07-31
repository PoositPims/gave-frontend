// function CategoryCard(props) {
//   return (
//     <div className="category">
//       <div className="categoryPic">
//         <img src="groceries.png" alt="" />
//       </div>
//       <h5>อุปโภค บริโภค </h5>
//     </div>
//   );
// }

// export default CategoryCard;

function CategoryCard(props) {
  return (
    <div className="category">
      <div className="categoryPic">
        <img src={props.CategoryPic} alt="" />
      </div>
      <h5>{props.CategoryName}</h5>
    </div>
  );
}

export default CategoryCard;
