import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home(){
const [cat, setcat] = useState([]);
const img = ["https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/smartphone-photography/thumbnail.jpeg","https://5.imimg.com/data5/NX/EU/DX/ANDROID-52760115/product-jpeg.jpg", "https://iberchem.com/wp-content/uploads/2020/12/2021-Fine-Fragrance-Trends-Iberchem-1024x683.jpg", "https://beminimalist.co/cdn/shop/articles/Blog_Creative_65.jpg?v=1601267370", "https://i0.wp.com/santhe.in/wp-content/uploads/2023/01/2.png?fit=1020%2C690&ssl=1", "https://housing.com/news/wp-content/uploads/2023/02/Amazing-room-decoration-ideas-to-beautify-your-home-f.jpg" ]

useEffect(()=>{
fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(data=>setcat(data));
},[])

console.log(cat)
    return ( <>
    <>
  {/* slider section */}
  <section className="slider_section long_section">
    <div id="customCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container ">
            <div className="row">
              <div className="col-md-5">
                <div className="detail-box">
                  <h1>
                    For All Your <br />
                    Furniture Needs
                  </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minus quidem maiores perspiciatis, illo maxime voluptatem a
                    itaque suscipit.
                  </p>
                  <div className="btn-box">
                    <a href="" className="btn1">
                      Contact Us
                    </a>
                    <a href="" className="btn2">
                      About Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="img-box">
                  <img src="images/slider-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container ">
            <div className="row">
              <div className="col-md-5">
                <div className="detail-box">
                  <h1>
                    For All Your <br />
                    Furniture Needs
                  </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minus quidem maiores perspiciatis, illo maxime voluptatem a
                    itaque suscipit.
                  </p>
                  <div className="btn-box">
                    <a href="" className="btn1">
                      Contact Us
                    </a>
                    <a href="" className="btn2">
                      About Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="img-box">
                  <img src="images/slider-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container ">
            <div className="row">
              <div className="col-md-5">
                <div className="detail-box">
                  <h1>
                    For All Your <br />
                    Furniture Needs
                  </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minus quidem maiores perspiciatis, illo maxime voluptatem a
                    itaque suscipit.
                  </p>
                  <div className="btn-box">
                    <a href="" className="btn1">
                      Contact Us
                    </a>
                    <a href="" className="btn2">
                      About Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="img-box">
                  <img src="images/slider-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ol className="carousel-indicators">
        <li
          data-target="#customCarousel"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#customCarousel" data-slide-to={1} />
        <li data-target="#customCarousel" data-slide-to={2} />
      </ol>
    </div>
  </section>
  {/* end slider section */}
  {/* furniture section */}
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
        {i < 6 &&
        <div className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
            <img src={img[i]} alt="" />
            </div>
            <div className="detail-box">
            <h5>{ty}</h5>
            </div>
          </div>
        </div>
        }
        </>
)}
      </div>
    </div>
    <Link to={`/SeeAll`}><button>See all..</button></Link>
  </section>
  {/* end furniture section */}
 
</>

    </>);
}

export default Home;