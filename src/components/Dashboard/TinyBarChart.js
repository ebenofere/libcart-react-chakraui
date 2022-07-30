import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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

const TinyBarChart = ({ booksNoEachMonth }) => {
  return (
    <Box
      flex="1"
      color="lightblue"
      height="270px"
      width="180px"
      boxShadow="xs"
      rounded="md"
      //   style={{ border: '1px solid black' }}
    >
      <Box>
        <Flex align="center" justifyContent="space-between" mb={4}>
          <Text fontWeight="600">Unique items added by year</Text>
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
        <BarChart
          width={500}
          height={300}
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
          <Legend />
          {/* <Bar dataKey="pv" fill="#8884d8" /> */}
          <Bar dataKey="totalBooks" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default TinyBarChart;
