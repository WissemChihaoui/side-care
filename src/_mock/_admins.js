import { _mock } from './_mock';


export const ADMINS_ROLES = [
  { value: 'contact', label: 'Contact Principal' },
  { value: 'gestion', label: 'Gestionnaire de paie' },
  { value: 'other', label: 'Autre administrateur' },
];
export const ADMINS = [...Array(4)].map((_, index) => ({
  id: index,
  name: _mock.fullName(index),
  lastName: _mock.lastName(index),
  firstName: _mock.firstName(index),
  isAdmin: index === 0,
  right: index === 0 ? 'Super Admin' : 'Administrateur',
  roles: index === 0 ? '/' : 'Contact Principal',
  email: _mock.email(index),
}));
export const EXPERTS = [...Array(1)].map((_, index) => ({
  id: index,
  entreprise: _mock.companyNames(index),
  lastName: _mock.lastName(index),
  firstName: _mock.firstName(index),
  cabinet:  _mock.companyNames(index),
  gestion: '-',
  email: _mock.email(index),
  phone: _mock.phoneNumber(index)
}));

export const BANK_ACCOUNT = [...Array(3)].map((_, index) => ({
  id: index,
  name: _mock.fullName(0),
  iban: 'FR7630006000011234567890189',
  bic: 'CRLYFPP',
  rip: null,
  isDefault: index === 0,
}))
