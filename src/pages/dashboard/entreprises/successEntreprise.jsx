import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import EntrepriseAddSuccess from 'src/sections/dashboard/employes/entreprises/views/entreprise-add-success';

// ----------------------------------------------------------------------

const metadata = { title: `Ajouter Entreprise | Tableau de bord - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      
      <EntrepriseAddSuccess />
    </>
  );
}
