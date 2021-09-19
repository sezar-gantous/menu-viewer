import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as MenuHeaderStyles from './styledComponents';

const PageHeader = () => (
  <MenuHeaderStyles.HeaderContainer data-testid="PageHeaderContainer">
    <MenuHeaderStyles.HeaderTitle variant="h4" component="h2">
      <MenuHeaderStyles.Link component={RouterLink} underline="hover" to="/">
        Menu Viewer
      </MenuHeaderStyles.Link>
    </MenuHeaderStyles.HeaderTitle>
  </MenuHeaderStyles.HeaderContainer>
);

export default PageHeader;
