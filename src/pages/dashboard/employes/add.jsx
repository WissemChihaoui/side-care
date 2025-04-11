import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import EffectifsAddPage from 'src/sections/dashboard/employes/effectifs/view/effectifs-add-page';

// ----------------------------------------------------------------------

const metadata = { title: `Ajouter Employé | Tableau de bord - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <EffectifsAddPage />
    </>
  );
}
