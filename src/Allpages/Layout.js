import { Outlet, Link, useFetcher, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchProduct from "./SearchProduct";


function Layout() {
  const [search, setsearch] = useState("");
  let nav = useNavigate()
  const SearchProduct = (e) =>{ e.preventDefault();
  nav("/SearchProduct",{state:{name:search}})
  }
    return ( <>
     <>
  {/* header section strats */}
  <header className="header_section long_section px-0">
    <nav className="navbar navbar-expand-lg custom_nav-container ">
      <Link className="navbar-brand" to="index.html">
        <span>Edgecut</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className=""> </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
          <ul className="navbar-nav  ">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                 
                {" "}
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Furnitures">
                Furnitures
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blogs">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact Us
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/SearchProduct">
                Searched Products</Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/SeeAll">
                See All
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="quote_btn-container">
          <Link to="">
            <span>Login</span>
            <i className="fa fa-user" aria-hidden="true" />
          </Link>
          <form className="form-inline" onSubmit={SearchProduct}>
            <input type="text" placeholder="Search Products" onChange={(e)=>setsearch(e.target.value)}></input>
            <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit" onSubmit={SearchProduct}>
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  {/* end header section */}
</>
 <Outlet />
 <>
  {/* info section */}
  <section className="info_section long_section">
    <div className="container">
      <div className="contact_nav">
        <a href="">
          <i className="fa fa-phone" aria-hidden="true" />
          <span>Call : +01 123455678990</span>
        </a>
        <a href="">
          <i className="fa fa-envelope" aria-hidden="true" />
          <span>Email : demo@gmail.com</span>
        </a>
        <a href="">
          <i className="fa fa-map-marker" aria-hidden="true" />
          <span>Location</span>
        </a>
      </div>
      <div className="info_top ">
        <div className="row ">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="info_links">
              <h4>QUICK LINKS</h4>
              <div className="info_links_menu">
                <a className="" href="index.html">
                  Home <span className="sr-only">(current)</span>
                </a>
                <a className="" href="about.html">
                  {" "}
                  About
                </a>
                <a className="" href="furniture.html">
                  Furniture
                </a>
                <a className="" href="blog.html">
                  Blog
                </a>
                <a className="" href="contact.html">
                  Contact Us
                </a>
                {/* <a className="" href="SearchProduct"></a> */}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mx-auto">
            <div className="info_post">
              <h5>INSTAGRAM FEEDS</h5>
              <div className="post_box">
                <div className="img-box">
                  <img src="images/f1.png" alt="" />
                </div>
                <div className="img-box">
                  <img src="images/f2.png" alt="" />
                </div>
                <div className="img-box">
                  <img src="images/f3.png" alt="" />
                </div>
                <div className="img-box">
                  <img src="images/f4.png" alt="" />
                </div>
                <div className="img-box">
                  <img src="images/f5.png" alt="" />
                </div>
                <div className="img-box">
                  <img src="images/f6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info_form">
              <h4>SIGN UP TO OUR NEWSLETTER</h4>
              <form action="">
                <input type="text" placeholder="Enter Your Email" />
                <button type="submit">Subscribe</button>
              </form>
              <div className="social_box">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end info_section */}
  {/* footer section */}
  <footer className="footer_section">
    <div className="container">
      <p>
        © <span id="displayYear" /> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </footer>
  {/* footer section */}
</>



    </> );
}

export default Layout;