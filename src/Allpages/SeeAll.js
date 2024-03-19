import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function SeeAll() {

    const [cat, setcat] = useState([]);
const img = ["https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/smartphone-photography/thumbnail.jpeg","https://5.imimg.com/data5/NX/EU/DX/ANDROID-52760115/product-jpeg.jpg", "https://iberchem.com/wp-content/uploads/2020/12/2021-Fine-Fragrance-Trends-Iberchem-1024x683.jpg", "https://beminimalist.co/cdn/shop/articles/Blog_Creative_65.jpg?v=1601267370", "https://i0.wp.com/santhe.in/wp-content/uploads/2023/01/2.png?fit=1020%2C690&ssl=1", "https://housing.com/news/wp-content/uploads/2023/02/Amazing-room-decoration-ideas-to-beautify-your-home-f.jpg" ]

useEffect(()=>{
fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(data=>setcat(data));
},[])

    return (
    <>
    <section className="furniture_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>Shop by Category</h2>
        <p>
          which don't look even slightly believable. If you are going to use a
          passage of Lorem Ipsum, you need to be sure there isn't an
        </p>
      </div>
      <div className="row">
        {cat.map((ty, i)=>
         <>
        
        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
            <Link to={`/SingleProduct/${ty.id}`} ><img src={img[i]} alt="" /></Link>
            </div>
            <div className="detail-box">
            <h5>{ty}</h5>
            </div>
          </div>
        </div>
        
        </>
)}
      </div>
    </div>
    {/* <button >See all..</button> */}
  </section>
    </> );
}

export default SeeAll;