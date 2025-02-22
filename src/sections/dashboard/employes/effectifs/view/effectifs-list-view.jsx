import { Button, IconButton, Menu, MenuItem, MenuList, Stack, Tab, Tabs } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';
import { Iconify } from 'src/components/iconify';
import { useTabs } from 'src/hooks/use-tabs';
import { DashboardContent } from 'src/layouts/dashboard';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';
import { CustomPopover, usePopover } from 'src/components/custom-popover';
import EffectifsList from '../effectifs-list';
import StatistiquesView from '../statistiques-view';

export const JOB_DETAILS_TABS = [
  { label: 'Effectifs', value: 'effectif' },
  { label: 'Statistiques', value: 'statistiques' },
];
export default function EffectifsListView() {
  const tabs = useTabs('effectif');
  const popover = usePopover();

  const [isOpen, setOpen] = useState(null);

  const handleOpen = useCallback((event) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  const renderTabs = (
    <Tabs value={tabs.value} onChange={tabs.onChange} sx={{ mb: { xs: 3, md: 5 } }}>
      {JOB_DETAILS_TABS.map((tab) => (
        <Tab key={tab.value} iconPosition="end" value={tab.value} label={tab.label} />
      ))}
    </Tabs>
  );

  const renderActions = (
    <Stack flexDirection="row">
      <Button
        startIcon={<Iconify icon="mingcute:add-line" />}
        variant="contained"
        onClick={handleOpen}
        color='primary'
      >
        Ajouter
      </Button>
      <Menu id="simple-menu" anchorEl={isOpen} onClose={handleClose} open={!!isOpen}>
        <MenuItem>Créer un employé</MenuItem>
        <MenuItem>Réintégrer u ancien employé</MenuItem>
        <MenuItem>Générer un lien d&apos;invitation</MenuItem>
        <MenuItem>Importer mes employés via DSN</MenuItem>
        <MenuItem>Importer mes employés via fichiher excel</MenuItem>
      </Menu>
      <IconButton onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
          <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="mdi:user-add" />
            Déclarer un départ définitif
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="mdi:account-cancel" />
            Déclarer un congé longue durée
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="solar:export-bold" />
            Exporter le tableau
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </Stack>
  );
  return (
    <>
      <DashboardContent>
        <CustomBreadcrumbs
          heading="Effectifs"
          links={[
            { name: 'Tableau de bord', href: paths.dashboard.root },
            { name: 'Employés', href: paths.dashboard.employes.root },
            { name: 'Effectifs' },
          ]}
          action={renderActions}
          sx={{ mb: { xs: 3, md: 5 } }}
        />
        {renderTabs}
        {tabs.value === 'effectif' && <EffectifsList />}
        {tabs.value === 'statistiques' && <StatistiquesView />}
      </DashboardContent>
    </>
  );
}
