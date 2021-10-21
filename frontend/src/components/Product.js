import React from "react";
import Rating from "./Rating";
import{ Link} from "react-router-dom"



const Product =({product})=>{
    return(
        <>
        <li key={product._id}>
        <div className="product">
                  <div to= {`/product/${product._id}`}>
                  <img style={{borderRadius:"2px"}}  src={product.image} alt={product.name}/>
                   </div>
                   
                   <div className="overlay ">
                       <Link  className="a"  to= {`/product/${product._id}`}>
                       <i  style={{height:"2rem", padding: "1.5rem 1.7rem", width:'2rem',marginLeft:"-.8rem"  
                      }} className="fa fa-info icon"></i>
                    </Link>
                       <Link  className="a"  to= {`/wishlist/${product._id}`}>
                       <i  style={{height:"2rem", padding:"1.5rem 1.7rem", width:'2rem', 
                      }} className="fa fa-heart icon"></i>
                    </Link>
                    {product.countInStock > 0 && 
  <Link  className="a"  to= {`/cart/${product._id}`}>
                       <i   style={{height:"2rem", padding:"1.5rem 1.7rem", width:'2rem', fontSize:"2rem", 
                      }} className="fa fa-cart-plus icon"></i>
                       </Link>}
                      
                   </div>
                  <div className="product-name">
               <Link to= {`/product/${product._id}`}>
             {product.name}
              </Link>
              </div>
              <div className="category-price">
                  {/* <p>{product.category}</p> */}

                  <div  className="price">
                       <div href="">₦{product.price}</div>
                   </div>
              <div >
             <Rating   rating={product.rating}  
             
              />
                  
                  </div>
              </div>
                  </div>
                 
        </li>
        
        </>
        )
};

export default Product;