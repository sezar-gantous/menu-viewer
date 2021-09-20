import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { MenuSkeletonLoading } from './component/MenuSkeletonLoading';
import * as MenuGridStyles from './styledComponents';

const MenuGrid = ({ menus, isLoading }) => (
  <MenuGridStyles.MenuGridContainer data-testid="MenuGridContainer">
    {isLoading ? (
      <>
        <MenuSkeletonLoading />
        <MenuSkeletonLoading />
        <MenuSkeletonLoading />
        <MenuSkeletonLoading />
        <MenuSkeletonLoading />
      </>
    ) : (
      menus.map(item => (
        <MenuGridStyles.CardContainer
          key={`menuItem-${item.id}`}
          data-testid={`menuItem-${item.id}`}
        >
          <MenuGridStyles.Link
            component={RouterLink}
            to={`/menus/${item.id}`}
            underline="none"
          >
            <MenuGridStyles.PosterContainer
              image="/food.jpg"
              alt={item.name}
              title={item.name}
            />

            <MenuGridStyles.CardContent>
              <MenuGridStyles.Typography
                gutterBottom
                variant="h5"
                component="h2"
              >
                {item.name}
              </MenuGridStyles.Typography>

              <MenuGridStyles.Menudescription
                variant="body2"
                color="textSecondary"
                component="span"
              >
                {item.description}
              </MenuGridStyles.Menudescription>
            </MenuGridStyles.CardContent>
          </MenuGridStyles.Link>
        </MenuGridStyles.CardContainer>
      ))
    )}
  </MenuGridStyles.MenuGridContainer>
);

export const defaultProps = {
  menus: [],
  isLoading: false,
};

MenuGrid.defaultProps = defaultProps;

MenuGrid.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
      release_date: PropTypes.string,
    })
  ),
  isLoading: PropTypes.bool,
};

export default MenuGrid;
