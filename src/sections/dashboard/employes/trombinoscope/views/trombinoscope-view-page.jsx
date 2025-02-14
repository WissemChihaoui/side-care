import React, { useCallback, useState } from 'react';
import { _userFollowers } from 'src/_mock';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';
import { DashboardContent } from 'src/layouts/dashboard';
import { paths } from 'src/routes/paths';
import { Box, Card } from '@mui/material';
import { ItemCard } from '../item-card';
import FiltersTromb from '../filters-tromb';

export default function TrombinoscopeViewPage() {
  console.log(_userFollowers);
  const _mockFollowed = _userFollowers.slice(4, 8).map((i) => i.id);

  const [followed, setFollowed] = useState(_mockFollowed);

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

        {/* <FiltersTromb /> */}
        
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        >
          {_userFollowers.map((follower) => (
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
