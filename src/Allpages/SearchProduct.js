import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";


function SearchProduct(){
    let location = useLocation()
    
    const [sproduct, setsproduct] = useState([]);
   console.log(location.state.name)
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/search?q=${location.state.name}`)
        .then(res=>res.json())
        .then(data=>setsproduct(data.products))
      },[sproduct])

      return(
    
        <section className="furniture_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Products of {location.state.name}</h2>
            <p>
              which don't look even slightly believable. If you are going to use a
              passage of Lorem Ipsum, you need to be sure there isn't an
            </p>
          </div>
          <div className="row">
            {sproduct.map((ty)=>
             <>            
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                <Link to={`/SingleProduct/${ty.id}`} ><img src={ty.thumbnail} alt="" /></Link>
                </div>
                <div className="detail-box">
                <h5>{ty.title}</h5>
                </div>
              </div>
            </div>
            
            </>
    )}
          </div>
        </div>
        {/* <button >See all..</button> */}
      </section> );
}

export default SearchProduct;