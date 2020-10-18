import React from 'react'

// Code Splitting using React.lazy()
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Reports = React.lazy(() => import('./views/reports/Reports'))
const Registrations = React.lazy(() =>
  import('./views/registrations/Registrations')
)
const Registration = React.lazy(() =>
  import('./views/registrations/Registration')
)

const routes = [
  { path: '/', exact: true, name: 'KMS Home', subheader: true },
  {
    path: '/dashboard',
    name: 'Analytics',
    component: Dashboard,
    subheader: true
  },
  { path: '/reports', name: 'Analytics', component: Reports, subheader: true },
  {
    path: '/registrations',
    name: 'Registrations',
    component: Registrations,
    subheader: false
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
    subheader: false
  }
]

export default routes
