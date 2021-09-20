import React from 'react';
import { useQuery } from 'react-query';
import api from 'services/api';
import { MenuGrid } from 'features/MenuGrid';
import * as HomeStyles from './styledComponents';

async function fetchMenus() {
  const { data } = await api({
    url: `${process.env.REACT_APP_MenuDB_API}/menus`,
    method: 'GET',
  });
  return data;
}

const Home = () => {
  const { data, error, isError, isLoading } = useQuery('menus', fetchMenus);

  if (!isLoading && data.length === 0) {
    return (
      <HomeStyles.NoMenus>Could not find Menus, sorry!</HomeStyles.NoMenus>
    );
  }
  if (isError) {
    return <HomeStyles.NoMenus>Error! {error.message}</HomeStyles.NoMenus>;
  }
  return <MenuGrid menus={data} isLoading={isLoading} />;
};
export default Home;
