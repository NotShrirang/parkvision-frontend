import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

export const OverviewEntries = (props) => {
  const { state={}, difference, positive = false, sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Total Entries
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <LocalParkingIcon />
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
                color={difference>0 ? 'success' : 'error'}
                fontSize="small"
              >
                {/* {difference>0  ? <ArrowUpIcon /> : <ArrowDownIcon />} */}
              </SvgIcon>
              {/* <Typography
                color={difference>0 ? 'success.main' : 'error.main'}
                variant="body2"
              > */}
                {difference}
              {/* </Typography> */}
            </Stack>
            {/* <Typography
              color="text.secondary"
              variant="caption"
            >
              Since last {
                 state.value === 'Daily' ? 'day' :
                 state.value === 'Weekly' ? 'week' :
                 state.value === 'Monthly' ? 'month' :''
                 
              }
            </Typography> */}
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

OverviewEntries.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
