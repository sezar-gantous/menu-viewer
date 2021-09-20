/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import PlusIcon from '@material-ui/icons/Add';
import MinuseIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';

export const NoMenus = styled.div`
  background-color: white;
  width: 50%;
  margin: auto auto;
  height: 200px;
  border-radius: 1em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2),
    5px 5px 5px 5px rgba(0, 0, 0, 0.14), 5px 5px 5px 5px rgba(0, 0, 0, 0.12);
`;

export const CategoryGrid = styled(Grid)`
  flex-grow: 1;
`;

export const ProductCardDescription = styled(Typography)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ProductCardImage = styled.img`
  object-fit: cover;
  width: 100%;
  display: block;
  border-radius: 1em;
`;

export { Box };
export { Grid };
export { Card };
export { CardMedia };
export { CardContent };
export { CardActionArea };
export { Dialog };
export { DialogActions };
export { DialogTitle };
export { DialogContent };
export { DialogContentText };
export { Typography };
export { IconButton };
export { PlusIcon };
export { MinuseIcon };
export { TextField };
export { Button };
