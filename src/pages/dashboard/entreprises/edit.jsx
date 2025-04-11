import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { ENTREPRISE_LIST } from 'src/_mock/_entreprises';

import EntrepriseEditView from 'src/sections/dashboard/employes/entreprises/views/entreprise-edit-view';

// ----------------------------------------------------------------------

const metadata = { title: `Modifier Entreprise | Tableau de bord - ${CONFIG.appName}` };

export default function Page() {
  const { id = '' } = useParams();

  const currentEntreprise = ENTREPRISE_LIST.find((entreprise) => entreprise.id === id);

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <EntrepriseEditView entreprise={currentEntreprise}/>
    </>
  );
}
