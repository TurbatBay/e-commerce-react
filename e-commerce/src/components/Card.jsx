import Card from 'react-bootstrap/Card';
import { Star } from 'react-bootstrap-icons';
import MyImage from './images/iwatch.png';

function Cart(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={MyImage} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.price}
            </Card.Text>
            <Star />
        <Star />
        <Star />
        <Star />
        <Star />
            
      </Card.Body>
        
      <Card.Body>

      </Card.Body>
    </Card>
  );
}

export default Cart;