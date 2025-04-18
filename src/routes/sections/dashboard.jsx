import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/dashboard/one'));
const PageTwo = lazy(() => import('src/pages/dashboard/two'));
const PageThree = lazy(() => import('src/pages/dashboard/three'));
const PageFour = lazy(() => import('src/pages/dashboard/four'));
const PageFive = lazy(() => import('src/pages/dashboard/five'));
const PageSix = lazy(() => import('src/pages/dashboard/six'));


const Effectif = lazy(() => import('src/pages/dashboard/employes/index'));
const Employe = lazy(() => import('src/pages/dashboard/employes/view'));
const AddEmploye = lazy(() => import('src/pages/dashboard/employes/add'));

const Entreprises = lazy(() => import('src/pages/dashboard/entreprises/entreprises'));
const AddEntreprise = lazy(() => import('src/pages/dashboard/entreprises/add'));
const EditEntreprise = lazy(() => import('src/pages/dashboard/entreprises/edit'));
const ViewEntreprise = lazy(() => import('src/pages/dashboard/entreprises/view'));
const SuccessAddEntreprise = lazy(() => import('src/pages/dashboard/entreprises/successEntreprise'));

const Trombinoscope = lazy(() => import('src/pages/dashboard/trombinoscope/index'));

const Equipes = lazy(() => import('src/pages/dashboard/equipe/index'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <IndexPage />, index: true },
      {
        path: 'employes',
        children: [
          { element: <Effectif />, index: true},
          { element: <Employe />, path :':id/view'},
          { element: <AddEmploye />, path :'add'},
        ]
      },
      {
        path: 'vos-entreprises',
        children: [
          { element: <Entreprises />, index: true},
          { element: <AddEntreprise />, path: 'add'},
          { element: <EditEntreprise />, path: ':id/edit'},
          { element: <ViewEntreprise />, path: ':id/view'},
          { element: <SuccessAddEntreprise />, path: 'add/success'},
        ]
      },
      {
        path: 'equipes',
        children: [
          { element: <Equipes />, index: true},
        ]
      },
      {
        path: 'trombinoscope',
        children: [
          { element: <Trombinoscope />, index: true},
        ]
      },
      { path: 'two', element: <PageTwo /> },
      { path: 'three', element: <PageThree /> },
      {
        path: 'group',
        children: [
          { element: <PageFour />, index: true },
          { path: 'five', element: <PageFive /> },
          { path: 'six', element: <PageSix /> },
        ],
      },
    ],
  },
];
