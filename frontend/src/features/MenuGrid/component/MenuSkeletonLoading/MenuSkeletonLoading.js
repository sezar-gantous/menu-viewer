import React from 'react';
import * as MenuSkeletonLoadingStyles from '../../styledComponents';

const MenuSkeletonLoading = () => (
  <MenuSkeletonLoadingStyles.CardContainer data-testid="MenuSkeletonLoadingContainer">
    <MenuSkeletonLoadingStyles.Skeleton
      animation="wave"
      variant="rect"
      height="300px"
    />
    <MenuSkeletonLoadingStyles.CardContent>
      <MenuSkeletonLoadingStyles.Skeleton
        animation="wave"
        height={10}
        width="85%"
      />
      <MenuSkeletonLoadingStyles.Skeleton
        animation="wave"
        height={10}
        width="40%"
      />
      <MenuSkeletonLoadingStyles.Skeleton
        animation="wave"
        variant="circle"
        width={20}
        height={20}
      />
    </MenuSkeletonLoadingStyles.CardContent>
  </MenuSkeletonLoadingStyles.CardContainer>
);

export default MenuSkeletonLoading;
