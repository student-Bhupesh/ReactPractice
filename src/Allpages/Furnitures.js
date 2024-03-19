import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Furnitures() {
const[user, setuser] = useState([])

  useEffect(()=>{
    fetch("https://dummyjson.com/products?limit=10")
    .then(res=>res.json())
    .then(data=>setuser(data.products))
  },[])

  console.log(user)
    return ( <>
        {/* furniture section */}
        <section className="furniture_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>Our Furniture </h2>
              {/* {user.map((ty)=><p>{ty.title}</p>)} */}
              <p>
                which don't look even slightly believable. If you are going to use a
                passage of Lorem Ipsum, you need to be sure there isn't an
              </p>
            </div>
            <div className="row">
            {user.map((ty)=>
              <div className="col-md-6 col-lg-4">
                <div className="box">
                  <div className="img-box">
                    <Link to={`/SingleProduct/${ty.id}`} ><img src={ty.thumbnail} alt="" /> </Link>
                  </div>
                  <div className="detail-box">
                    <h5>{ty.title}</h5>
                    <div className="price_box">
                      <h6 className="price_heading">
                        <span>$</span> 100.00 
                      </h6>
                      <a href="">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </section>
        {/* end furniture section */}
      </>
       );
}

export default Furnitures;