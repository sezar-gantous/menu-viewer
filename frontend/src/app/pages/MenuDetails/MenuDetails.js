import React from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import api from 'services/api';
import * as MenuDetailsStyles from './styledComponents';
import { ProductCard } from './components/ProductCard';
import { ProductDialog } from './components/ProductDialog';

async function fetchMenu(menuid) {
  const { data } = await api({
    url: `${process.env.REACT_APP_MenuDB_API}/menus/${menuid}`,
    method: 'GET',
  });
  return data;
}

const MenuDetails = ({ match }) => {
  const [productDetail, setProductDetail] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);

  const { data, error, isError, isLoading } = useQuery('menu', () =>
    fetchMenu(match.params.menuid)
  );
  const showProduct = product => {
    setProductDetail(product);
    setIsOpen(true);
  };

  const hideProduct = () => {
    setProductDetail(null);
    setQuantity(0);
    setIsOpen(false);
  };
  const changeQuantity = e => {
    if (e?.target?.value?.match(/^\d+$/g)) {
      setQuantity(e.target.value);
    }
  };

  if (isLoading) {
    return (
      <MenuDetailsStyles.NoMenus data-testid="MenuDetailsContainer">
        isLoading
      </MenuDetailsStyles.NoMenus>
    );
  }
  if (isError) {
    return (
      <MenuDetailsStyles.NoMenus data-testid="MenuDetailsContainer">
        Error! {error.message}
      </MenuDetailsStyles.NoMenus>
    );
  }
  if (!isLoading && data?.length === 0) {
    return (
      <MenuDetailsStyles.NoMenus data-testid="MenuDetailsContainer">
        Could not find Menus, sorry!
      </MenuDetailsStyles.NoMenus>
    );
  }
  return (
    <>
      <MenuDetailsStyles.Box
        sx={{ flexGrow: 1 }}
        data-testid="MenuDetailsContainer"
      >
        <MenuDetailsStyles.Grid container spacing={10}>
          <MenuDetailsStyles.Grid item xs={12}>
            <div>
              <MenuDetailsStyles.Typography
                gutterBottom
                variant="h3"
                component="div"
              >
                {data.name}
              </MenuDetailsStyles.Typography>
              <MenuDetailsStyles.Typography
                variant="body2"
                color="text.secondary"
              >
                {data.description}
              </MenuDetailsStyles.Typography>
            </div>
          </MenuDetailsStyles.Grid>
          <MenuDetailsStyles.Grid container item spacing={10}>
            {data?.categories.map(category => (
              <MenuDetailsStyles.CategoryGrid
                item
                key={`cat-${category.id}`}
                xs={12}
              >
                <MenuDetailsStyles.Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {category.name}
                </MenuDetailsStyles.Typography>
                <MenuDetailsStyles.Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {category.description}
                </MenuDetailsStyles.Typography>
                <MenuDetailsStyles.Grid container item spacing={3}>
                  {category?.products.map(product => (
                    <ProductCard
                      key={`product-${product.id}`}
                      product={product}
                      showProduct={showProduct}
                    />
                  ))}
                </MenuDetailsStyles.Grid>
              </MenuDetailsStyles.CategoryGrid>
            ))}
          </MenuDetailsStyles.Grid>
        </MenuDetailsStyles.Grid>
      </MenuDetailsStyles.Box>
      <ProductDialog
        isOpen={isOpen}
        productDetail={productDetail}
        hideProduct={hideProduct}
        quantity={quantity}
        changeQuantity={e => changeQuantity(e)}
        increaseQuantity={() => setQuantity(quantity + 1)}
        decreaseQuantity={() =>
          setQuantity(quantity > 0 ? quantity - 1 : quantity)
        }
      />
    </>
  );
};

export const defaultProps = {
  match: { params: { menuid: null } },
  history: {},
};

MenuDetails.defaultProps = defaultProps;

MenuDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ menuid: PropTypes.number }),
  }),
  history: PropTypes.shape({ push: PropTypes.func }),
};

export default MenuDetails;
