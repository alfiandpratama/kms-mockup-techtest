import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/',
    icon: <CIcon name='cil-home' customClasses='c-sidebar-nav-icon' />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Registrations',
    to: '/registrations',
    icon: <CIcon name='cil-color-border' customClasses='c-sidebar-nav-icon' />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Patient Info',
    to: '/patient-info',
    icon: <CIcon name='cil-people' customClasses='c-sidebar-nav-icon' />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Analytics',
    to: '/dashboard',
    icon: <CIcon name='cil-chart-line' customClasses='c-sidebar-nav-icon' />,
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'mt-auto'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Help',
    to: '/help',
    icon: <CIcon name='cil-lightbulb' customClasses='c-sidebar-nav-icon' />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Settings',
    to: '/settings',
    icon: <CIcon name='cil-settings' customClasses='c-sidebar-nav-icon' />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Logout',
    to: '/logout',
    icon: <CIcon name='cil-account-logout' customClasses='c-sidebar-nav-icon' />
  }
]
