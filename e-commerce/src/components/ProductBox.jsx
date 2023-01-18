import popularData from '../data/popularCard';
import Stack from 'react-bootstrap/Stack'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { Modal } from 'react-bootstrap'
import Detail from './Detail'
import SinglePage from './SinglePage';
import { Routes, Route, Link } from 'react-router-dom';
import {Rating} from 'react-simple-star-rating'

export const ProductBox = ({ setAddWishlist, addWishlist, data, colors  }) => {

    const[stars, setStars] = useState(data.stars)
      const [heart, setHeart] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleProduct = (productId) => {
        setShow(true);

    };

    const upWishList = (productId) => {
        const filtered = popularData.filter(product => {
            if (product.id === productId) {
                return product
            }
        });
        setAddWishlist([...addWishlist, ...filtered]);

    };

   

    const downWishList = (productId) => {
        const filtered = addWishlist.filter(product => {
            if (product.id !== productId) {
                return product
            }
        });
        setAddWishlist([...filtered]);

    };
   

    return (


        <div className="m-2  p-2 border rounded product" >
            <Stack direction="horizontal" className="h-50">
                <Link to={'/detail'} className="col-10 h-100" state={data}>
                    <img onClick={() => handleProduct(data.id)} className=" h-100" src={data.imgUrl} alt=""></img></Link>
                {heart ? <AiFillHeart className="heart-icon" color={colors} onClick={() => {
                    downWishList(data.id); setHeart(false);
                }}></AiFillHeart>
                    : <AiOutlineHeart color={colors}  className="heart-icon" onClick={() => {
                        upWishList(data.id); setHeart(true); 
                    }}></AiOutlineHeart>}


            </Stack>
            <h5>{data.title}</h5>
            <Stack direction="horizontal" >
                <p1>{data.price}</p1>
                <img className="ms-auto" src="./img/shop.png" alt=""></img>

            </Stack>
            <Rating
          initialValue={stars}
       
          />
     
            <Modal show={show} onHide={handleClose} size="lg" >
                <SinglePage data={data} addWishlist={addWishlist}></SinglePage>
            </Modal>
        </div>

    )
                }