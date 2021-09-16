import { connect } from 'react-redux';
import { decrement, increment } from '../../redux/actions';
import Product from './components/product';

function Basket({ menu }) {
  return menu.map((product) => {
    return <Product product={product} />;
  });
}

export default Basket;
