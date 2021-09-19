import React from 'react';
import { useQuery } from 'react-query';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from 'services/api';
import * as MenuDetailsStyles from './styledComponents';

async function fetchMenu(menuid) {
  const { data } = await api({
    url: `${process.env.REACT_APP_MenuDB_API}/menus/${menuid}`,
    method: 'GET',
  });
  return data;
}

const MenuDetails = ({ match, history }) => {
  if (!match?.params?.menuid) {
    history.push('/');
  }
  const { data, error, isError, isLoading } = useQuery('menu', () =>
    fetchMenu(match.params.menuid)
  );

  console.log(`DATA`, data);
  if (isLoading) {
    return <MenuDetailsStyles.NoMenus>isLoading</MenuDetailsStyles.NoMenus>;
  }
  if (isError) {
    return (
      <MenuDetailsStyles.NoMenus>
        Error! {error.message}
      </MenuDetailsStyles.NoMenus>
    );
  }
  if (!isLoading && data?.length === 0) {
    return (
      <MenuDetailsStyles.NoMenus>
        Could not find Menus, sorry!
      </MenuDetailsStyles.NoMenus>
    );
  }
  return (
    <MenuDetailsStyles.Box sx={{ flexGrow: 1 }}>
      <MenuDetailsStyles.Grid container spacing={1}>
        <MenuDetailsStyles.Grid item xs={12}>
          <div>
            <h2>{data.name}</h2>
            <div>{data.description}</div>
          </div>
        </MenuDetailsStyles.Grid>
        <MenuDetailsStyles.Grid item xs={12}>
          {data?.categories.map(category => (
            <div key={`cat-${category.id}`}>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <MenuDetailsStyles.Grid container item spacing={3}>
                {category?.products.map(product => (
                  <MenuDetailsStyles.Grid
                    item
                    xs={4}
                    key={`product-${product.id}`}
                  >
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <span>{product.price}</span>
                  </MenuDetailsStyles.Grid>
                ))}
              </MenuDetailsStyles.Grid>
            </div>
          ))}
        </MenuDetailsStyles.Grid>
      </MenuDetailsStyles.Grid>
    </MenuDetailsStyles.Box>
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

export default withRouter(MenuDetails);
