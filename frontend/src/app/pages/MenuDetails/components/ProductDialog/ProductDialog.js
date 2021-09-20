import React from 'react';
import PropTypes from 'prop-types';
import * as MenuDetailsStyles from '../../styledComponents';

const ProductCard = ({
  productDetail,
  isOpen,
  hideProduct,
  changeQuantity,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => (
  <MenuDetailsStyles.Dialog
    open={isOpen}
    onClose={hideProduct}
    data-testid="ProductDialogContainer"
  >
    <MenuDetailsStyles.DialogTitle>
      {productDetail?.name}
    </MenuDetailsStyles.DialogTitle>
    <MenuDetailsStyles.DialogContent>
      <MenuDetailsStyles.DialogContentText>
        {productDetail?.description}
      </MenuDetailsStyles.DialogContentText>
      <MenuDetailsStyles.ProductCardImage src="/food.jpg" alt="" />
      <MenuDetailsStyles.DialogContentText>
        {`$${productDetail?.price}`}
      </MenuDetailsStyles.DialogContentText>
      <MenuDetailsStyles.TextField
        id="Product-Quantity"
        label="Quantity"
        type="number"
        value={quantity}
        onChange={changeQuantity}
        InputProps={{
          inputProps: { min: 0 },
          startAdornment: (
            <MenuDetailsStyles.IconButton onClick={decreaseQuantity}>
              <MenuDetailsStyles.MinuseIcon />
            </MenuDetailsStyles.IconButton>
          ),
          endAdornment: (
            <MenuDetailsStyles.IconButton onClick={increaseQuantity}>
              <MenuDetailsStyles.PlusIcon />
            </MenuDetailsStyles.IconButton>
          ),
        }}
      />
    </MenuDetailsStyles.DialogContent>
    <MenuDetailsStyles.DialogActions>
      <MenuDetailsStyles.Button onClick={hideProduct}>
        Cancel
      </MenuDetailsStyles.Button>
      <MenuDetailsStyles.Button onClick={hideProduct}>
        Add
      </MenuDetailsStyles.Button>
    </MenuDetailsStyles.DialogActions>
  </MenuDetailsStyles.Dialog>
);

export const defaultProps = {
  productDetail: { name: '', description: '', price: 0 },
  hideProduct: () => {},
  changeQuantity: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  quantity: 0,
  isOpen: false,
};

ProductCard.defaultProps = defaultProps;

ProductCard.propTypes = {
  productDetail: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
  hideProduct: PropTypes.func,
  increaseQuantity: PropTypes.func,
  decreaseQuantity: PropTypes.func,
  changeQuantity: PropTypes.func,
  quantity: PropTypes.number,
  isOpen: PropTypes.bool,
};

export default ProductCard;
