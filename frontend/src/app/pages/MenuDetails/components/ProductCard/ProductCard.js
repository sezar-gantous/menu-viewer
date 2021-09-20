import React from 'react';
import PropTypes from 'prop-types';
import * as MenuDetailsStyles from '../../styledComponents';

const ProductCard = ({ product, showProduct }) => (
  <MenuDetailsStyles.Grid
    item
    xs={12}
    sm={6}
    md={4}
    lg={3}
    xl={2}
    data-testid="ProductCardContainer"
  >
    <MenuDetailsStyles.Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <MenuDetailsStyles.CardActionArea onClick={() => showProduct(product)}>
        <MenuDetailsStyles.CardMedia
          component="img"
          height="140"
          image="/food.jpg"
          alt={product?.name}
        />
        <MenuDetailsStyles.CardContent>
          <MenuDetailsStyles.Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {product?.name}
          </MenuDetailsStyles.Typography>
          <MenuDetailsStyles.ProductCardDescription
            variant="body2"
            color="text.secondary"
          >
            {product?.description}
          </MenuDetailsStyles.ProductCardDescription>
          <MenuDetailsStyles.Typography variant="body2">
            {`$${product?.price}`}
          </MenuDetailsStyles.Typography>
        </MenuDetailsStyles.CardContent>
      </MenuDetailsStyles.CardActionArea>
    </MenuDetailsStyles.Card>
  </MenuDetailsStyles.Grid>
);

export const defaultProps = {
  product: { name: '', description: '', price: 0 },
  showProduct: () => {},
};

ProductCard.defaultProps = defaultProps;

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
  showProduct: PropTypes.func,
};

export default ProductCard;
