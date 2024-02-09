import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import EllipsisVerticalIcon from '@heroicons/react/24/solid/EllipsisVerticalIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SvgIcon
} from '@mui/material';
import { FaCarAlt } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";


export const OverviewLatestArrivals = (props) => {
  const { products = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Latest Arrivals" />
      <List>
        {products.map((product, index) => {
          const hasDivider = index < products.length - 1;
          const ago = formatDistanceToNow(product.updatedAt);

          return (
            <ListItem
              divider={hasDivider}
              key={product.id}
            >
              <ListItemAvatar>
                {product.wheels ==4 ?<FaCarAlt/>:<RiMotorbikeFill/>}
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondary={`Arrived ${ago} ago`}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
              {/* <IconButton edge="end">
                <SvgIcon>
                  <EllipsisVerticalIcon />
                </SvgIcon>
              </IconButton> */}
            </ListItem>
          );
        })}
      </List>
      {/* <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions> */}
    </Card>
  );
};

OverviewLatestArrivals.propTypes = {
  products: PropTypes.array,
  sx: PropTypes.object
};
