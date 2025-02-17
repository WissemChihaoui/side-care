import React, { useCallback, useState } from 'react';
import { _userFollowers, TROMB_SORT_OPTIONS } from 'src/_mock';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';
import { DashboardContent } from 'src/layouts/dashboard';
import { paths } from 'src/routes/paths';
import { Box, Card, Stack } from '@mui/material';
import { getComparator, useTable } from 'src/components/table';
import { useSetState } from 'src/hooks/use-set-state';
import { orderBy } from 'src/utils/helper';
import { ItemCard } from '../item-card';
import FiltersTromb from '../filters-tromb';
import { SortTromb } from '../sort-tromb';

export default function TrombinoscopeViewPage() {
  const table = useTable();
  const [sortBy, setSortBy] = useState('latest');
  console.log(_userFollowers);

  const [followed, setFollowed] = useState(_userFollowers);

  const filters = useSetState({
    name: '',
    company: '',
  });

  const dataFiltered = applyFilter({
    inputData: followed,
    comparator: getComparator(table.order, table.orderBy),
    filters: filters.state,
    sortBy,
  });

  const handleSortBy = useCallback((newValue) => {
    setSortBy(newValue);
  }, []);

  console.log(dataFiltered);
  const handleClick = useCallback(
    (item) => {
      const selected = followed.includes(item)
        ? followed.filter((value) => value !== item)
        : [...followed, item];

      setFollowed(selected);
    },
    [followed]
  );
  return (
    <>
      <DashboardContent>
        <CustomBreadcrumbs
          heading="Trombinoscope"
          links={[
            { name: 'Tableau de bord', href: paths.dashboard.root },
            { name: 'Trombinoscope' },
            { name: 'Liste' },
          ]}
          sx={{ mb: { xs: 3, md: 5 } }}
        />
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction={{ xs: 'column', md: 'row' }}
          sx={{ mb: { xs: 3, md: 5 } }}
        >
          <FiltersTromb filters={filters} onResetPage={table.onResetPage} />
          <SortTromb sort={sortBy} onSort={handleSortBy} sortOptions={TROMB_SORT_OPTIONS} />
        </Stack>
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        >
          {dataFiltered.map((follower) => (
            <ItemCard
              key={follower.id}
              follower={follower}
              selected={followed.includes(follower.id)}
              onSelected={() => handleClick(follower.id)}
            />
          ))}
        </Box>
      </DashboardContent>
    </>
  );
}

function applyFilter({ inputData, comparator, filters, sortBy }) {
  const { name, company } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (follower) => follower.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }
  if (company) {
    console.log('inputData', inputData);
    inputData = inputData.filter((follower) => follower.company === company);
  }

  if (sortBy === 'latest') {
    inputData = orderBy(inputData, ['createdAt'], ['desc']);
  }

  if (sortBy === 'oldest') {
    inputData = orderBy(inputData, ['createdAt'], ['asc']);
  }
  if (sortBy === 'nameD') {
    console.log('order by', sortBy);

    inputData = orderBy(inputData, ['name'], ['desc']);
  }

  if (sortBy === 'nameA') {
    console.log('order by', sortBy);
    inputData = orderBy(inputData, ['name'], ['asc']);
  }

  return inputData;
}
