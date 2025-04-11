import React from 'react';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { EntrepriseAddEditForm } from '../entreprise-add-edit-form';

export default function EntrepriseEditView({ entreprise }) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Modifier"
        links={[
          { name: 'Tableau de bord', href: paths.dashboard.root },
          { name: 'Entreprise', href: paths.dashboard.entreprise },
          { name: entreprise?.name },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <EntrepriseAddEditForm entreprise={entreprise}/>
    </DashboardContent>
  );
}
