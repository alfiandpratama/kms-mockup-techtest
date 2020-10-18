import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter
} from '@coreui/react'
import { useHistory } from 'react-router-dom'

import { TheHeaderDropdown } from './index'

// routes config
import routes from '../routes'

const TheHeader = () => {
  const history = useHistory()

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow)
      ? true
      : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }
  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className='ml-md-3 d-lg-none'
        onClick={toggleSidebarMobile}
      />
      <CBreadcrumbRouter
        className='border-0 c-subheader-nav m-0 px-0 px-md-4 mr-auto'
        routes={routes}
      />
      <CHeaderNav className='px-4'>
        <TheHeaderDropdown />
      </CHeaderNav>
      {history.location.pathname === '/dashboard' && (
        <CSubheader className='px-4 justify-content-between'>
          <CHeaderNav className='mr-auto'>
            <CHeaderNavItem>
              <CHeaderNavLink to='/reports'>Generate Reports</CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem>
              <CHeaderNavLink to='/dashboard'>
                Management Dashboard
              </CHeaderNavLink>
            </CHeaderNavItem>
          </CHeaderNav>
        </CSubheader>
      )}
    </CHeader>
  )
}

export default TheHeader
