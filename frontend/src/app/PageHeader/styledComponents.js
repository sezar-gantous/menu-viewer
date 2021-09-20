import styled from 'styled-components';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export const HeaderContainer = styled.header`
  background-color: white;
  padding-top: 1em;
  margin-bottom: 1em;
  border-bottom: 1px solid rgb(231, 231, 231);
`;

export const HeaderTitle = styled(Typography)`
  text-align: center;
`;

export { Link };
