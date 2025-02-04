import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';
import { Iconify } from 'src/components/iconify';
import { useTabs } from 'src/hooks/use-tabs';
import { DashboardContent } from 'src/layouts/dashboard';
import { useParams } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';
import InfoEntrepriseView from '../display/info-entreprise-view';

const TABS_LIST = [
  {
    value: 'info',
    icon: <Iconify icon="material-symbols:info" width={24} />,
    label: 'Informations',
  },
  { value: 'doc', icon: <Iconify icon="solar:documents-bold" width={24} />, label: 'Documents' },
  { value: 'admin', icon: <Iconify icon="ri:admin-fill" width={24} />, label: 'Administrateurs' },
  { value: 'account', icon: <Iconify icon="mdi:bank" width={24} />, label: 'Comptes Bancaires' },
  {
    value: 'integrations',
    icon: <Iconify icon="ant-design:api-filled" width={24} />,
    label: 'Intégrations',
  },
];
export default function EntrepriseDisplayView({ id }) {
  const navTab = useTabs('info');

  return (
    <>
      <DashboardContent>
        <CustomBreadcrumbs
          heading={`Entreprise ${id}`}
          links={[
            { name: 'Tableau de bord', href: paths.dashboard.root },
            { name: 'Entreprises', href: paths.dashboard.entreprise },
            { name: 'Information' },
          ]}
          sx={{ mb: { xs: 3, md: 5 } }}
        />
        <Tabs value={navTab.value} onChange={navTab.onChange}>
          {TABS_LIST.map((tab) => (
            <Tab
              iconPosition="top"
              key={tab.value}
              icon={tab.icon}
              label={tab.label}
              value={tab.value}
              disabled={tab.disabled}
            />
          ))}
        </Tabs>
        <Box p={4}>
            { navTab.value === 'info' && <InfoEntrepriseView />}
            { navTab.value === 'doc' && <p>doc</p>}
            { navTab.value === 'admin' && <p>admin</p>}
            { navTab.value === 'account' && <p>account</p>}
            { navTab.value === 'integrations' && <p>integrations</p>}
        </Box>
      </DashboardContent>
    </>
  );
}
