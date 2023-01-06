
// import Card from 'react-bootstrap/Card';
// import { Star } from 'react-bootstrap-icons';
import MyImage from './images/iwatch.png';

function SmallCard(props) {
  return (
    <div className='small-card-container'>
      <div className="small-card-inside-flex">
          <img src={props.img} width="150px" alt='image'/>
          <div>
              <h2>{props.title}</h2>
              <h3>{props.items}</h3>
          </div>
      </div>
    </div>
  );
}

export default SmallCard;