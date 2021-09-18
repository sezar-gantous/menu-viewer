import React from 'react';
import * as MenuHeaderStyles from './styledComponents';

const PageHeader = () => (
  <MenuHeaderStyles.HeaderContainer data-testid="PageHeaderContainer">
    <MenuHeaderStyles.HeaderTitle variant="h4" component="h2">
      Menu Viewer
    </MenuHeaderStyles.HeaderTitle>
  </MenuHeaderStyles.HeaderContainer>
);

export default PageHeader;
