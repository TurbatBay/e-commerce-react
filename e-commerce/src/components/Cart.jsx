import Card from 'react-bootstrap/Card';
import { Star } from 'react-bootstrap-icons';
import MyImage from './images/iwatch.png';

function Cart(props) {
  return (
    <div className='popular-card'>
      <div className="popular-flex">
          <img src={props.imgURL} className="popular-card-img"  alt='image'/>
          <div>
              <h2>{props.title}</h2>
              <h3>{props.price}</h3>
              <Star />
              <Star />
              <Star />
              <Star />
          </div>
      </div>
    </div>

  );
}

export default Cart;






// <Card className='popular-card' style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={props.imgURL} />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//             <Card.Text>
//             {props.price}
//             </Card.Text>
//             <Star />
//         <Star />
//         <Star />
//         <Star />
//         <Star />
            
//       </Card.Body>
        
//       <Card.Body>

//       </Card.Body>
//     </Card>