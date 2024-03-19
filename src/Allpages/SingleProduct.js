import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
    const [single, setsingle] = useState([]);
    let {pid} = useParams()

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${pid}`)
        .then(res=>res.json())
        .then(data=>setsingle(data))
      },[])

    return ( 
        <>
        <section className="about_section layout_padding long_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="img-box">
                  <img src={single.thumbnail} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>{single.title}</h2>
                  </div>
                  <p>
                    {single.description}
                  </p>
                  <a href="">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
     );
}

export default SingleProduct;