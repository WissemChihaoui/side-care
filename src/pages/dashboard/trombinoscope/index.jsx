import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import TrombinoscopeViewPage from 'src/sections/dashboard/employes/trombinoscope/views/trombinoscope-view-page';

// ----------------------------------------------------------------------

const metadata = { title: `Trombinoscope | Tableau de bord - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      <TrombinoscopeViewPage />
    </>
  );
}
