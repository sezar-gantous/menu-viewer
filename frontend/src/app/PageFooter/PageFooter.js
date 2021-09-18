import React from 'react';
import * as MenuFooterStyles from './styledComponents';

const PageFooter = () => (
  <MenuFooterStyles.FooterContainer data-testid="PageFooterContainer">
    <MenuFooterStyles.FooterTitle
      variant="body2"
      color="textSecondary"
      component="p"
    >
      The project can be found on{' '}
      <MenuFooterStyles.Link
        href="https://github.com/sezar-gantous/menu-viewer"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </MenuFooterStyles.Link>
    </MenuFooterStyles.FooterTitle>
  </MenuFooterStyles.FooterContainer>
);

export default PageFooter;
