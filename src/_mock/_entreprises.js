import { today } from "src/utils/format-time";

import { _mock } from "./_mock";
import { ENTREPRISE } from "./_employes";

export const ENTREPRISE_LIST = [...Array(ENTREPRISE.length)].map((_, index) => ({
    id: _mock.id(index),
    isCreated: '1',
    name: ENTREPRISE[index],
    formeJuridique: 'Juridique 1',
    raison: ENTREPRISE[index],
    createdAt: today(),
    tva:"12344456",
    siren: "7888555",
    siret: "5885622",
    adresse: _mock.fullAddress(index),
    zipCode: "_mock.zipCode(index)",
    country: 'France',
    activity: 'Activité 1',
    convention: 'Convention Syntec',
    sales: 50000,
    logo: 'https://www.sidecare.com/assets/sidecare/logo_mascotte/mascotte_camel-0585321ab976044e65eed7e42cc370e32de2486f63c333660c10512338a2f824.svg',
  
    employes: 5,
    avgAge: 34,
    manageres: 2,
    avgAgeManagers: 39,
    nonManagers: 3,
    avgAgeNonManagers: 30,
  
    masseSalaireA: 40000,
    masseSalaireB: 28000,
  
    admin: 'Wissem Chihaoui',
    cabinet: '',
  }));