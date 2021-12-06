import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductScreen(props){
    const product = data.products.find((x)=>x._id === props.id);
 /* const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product){
      return <div>Product Not Found</div>
  }*/
    return(
        <div >
            <Link to="/" className="back">Back to results</Link>
            <div className="row top productScreen">
            <div className="col-2">
                <img className="large" src={product.image} alt={product.name}></img>
            </div>
            <div className="col-2">
            <div>
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li>
                        <Rating rating={product.rating}
                        numReviews={product.numReviews}
                        ></Rating>
                    </li>   
                    <li>
                        Price: ${product.price}
                    </li>
                    <li>
                        Description: {product.description}
                    </li>
                     
                 </ul>
                 </div>
 
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                            <div>Price:</div>
                            <div className="price">${product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status:</div>
                                <div>
                                    {product.countInStock>0?(
                                    <span className="success">In stock</span>
                                    ) : (
                                    <span className="error">Out of stock</span>
                                     ) }
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className="primary block">Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            </div>

    );
}