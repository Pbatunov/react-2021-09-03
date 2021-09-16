import { connect } from 'react-redux';
import { decrement, increment } from '../../../redux/actions';
import Button from '../../button';
import styles from '../../product/product.module.css';

function Product({ product, amount, decrement, increment }) {
  return (
    <div>
      <div style={{ maxWidth: '150px', marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px', textAlign: 'center' }}>
          {product.name}
        </div>
        <div>
          <div className={styles.buttons}>
            <Button
              onClick={decrement}
              icon="minus"
              data-id="product-decrement"
            />
            <span className={styles.count} data-id="product-amount">
              {amount}
            </span>
            <Button
              onClick={increment}
              icon="plus"
              data-id="product-increment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
