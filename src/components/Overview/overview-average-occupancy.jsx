import PropTypes from 'prop-types';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const OverviewAverageOccupancy = (props) => {
  const { difference, positive = true, value, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          // spacing={3}
        >
          <Stack>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Average Occupancy
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <AccessTimeIcon />
            </SvgIcon>
          </Avatar>
          </Stack>

          {difference && (
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
          <Stack
            alignItems="center"
            direction="row"
            spacing={0.5}
          >
          <SvgIcon
            color={positive ? 'success' : 'error'}
            fontSize="small"
          >
          {/* {positive ? <ArrowUpIcon /> : <ArrowDownIcon />} */}
          </SvgIcon>
          <Typography
            color={positive ? 'success.main' : 'error.main'}
            variant="body2"
          >
            {difference}
          </Typography>
        </Stack>
        {/* <Typography
          color="text.secondary"
          variant="caption"
        >
          Since last week
        </Typography> */}
        </Stack>
        )}
      </CardContent>
    </Card>
  );
};

OverviewAverageOccupancy.propTypes = {
  value: PropTypes.string,
  sx: PropTypes.object
};
