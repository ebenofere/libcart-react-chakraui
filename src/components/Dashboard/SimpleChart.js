import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Box,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const SimpleChart = ({ booksNoEachMonth }) => {
  return (
    <Box
      flex="1"
      color="lightblue"
      height="270px"
      width="180px"
      boxShadow="xs"
      rounded="md"
      // style={{ border: '1px solid black' }}
    >
      <Box>
        <Flex align="center" justifyContent="space-between" mb={4}>
          <Text fontWeight="600" ml={4}>
            Unique items added by rolling year
          </Text>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>Download SVG</MenuItem>
              <MenuItem>Download PNG</MenuItem>
              <MenuItem>Download CSV</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={booksNoEachMonth}
          margin={{
            top: 0,
            right: 0,
            left: -30,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="totalBooks"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SimpleChart;
