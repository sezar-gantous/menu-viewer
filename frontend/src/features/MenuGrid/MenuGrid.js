import React from 'react';
import PropTypes from 'prop-types';
import { MenuSkeletonLoading } from './component/MenuSkeletonLoading';
import * as MenuGridStyles from './styledComponents';

const MenuGrid = ({ menus, posterBaseUrl, isLoading }) => (
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
          <MenuGridStyles.PosterContainer
            image={`${posterBaseUrl}${item.poster_path}`}
            alt={item.name}
            title={item.name}
          />

          <MenuGridStyles.CardContent>
            <MenuGridStyles.Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </MenuGridStyles.Typography>

            <MenuGridStyles.ReleaseDate
              variant="body2"
              color="textSecondary"
              component="span"
            >
              {item.description}
            </MenuGridStyles.ReleaseDate>
          </MenuGridStyles.CardContent>
        </MenuGridStyles.CardContainer>
      ))
    )}
  </MenuGridStyles.MenuGridContainer>
);

export const defaultProps = {
  menus: [],
  posterBaseUrl: 'https://www.theMenudb.org/t/p/w500',
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
  posterBaseUrl: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default MenuGrid;
