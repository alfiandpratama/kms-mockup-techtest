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
  // get access to history route instance
  const history = useHistory()

  // get dispatch reference and extract data from redux store state
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  // show toggle sidebar mobile viewport event
  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow)
      ? true
      : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  // static subheader show
  const isSubheader =
    history.location.pathname === '/dashboard' ||
    history.location.pathname === '/reports'

  return (
    <CHeader withSubheader>
      {/* START: Toggler Sidebar Menu */}
      <CToggler
        inHeader
        className='ml-md-3 d-lg-none'
        onClick={toggleSidebarMobile}
      />
      {/* END: Toggler Sidebar Menu */}

      {/* START: Breadcrumb router */}
      <CBreadcrumbRouter
        className='border-0 c-subheader-nav m-0 px-0 px-md-4 mr-auto'
        routes={routes}
      />
      {/* END: Breadcrumb router */}

      {/* START: Header Navigation */}
      <CHeaderNav className='px-4'>
        <TheHeaderDropdown />
      </CHeaderNav>
      {/* END: Header Navigation */}

      {/* START: Subheader */}
      {isSubheader && (
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
      {/* END: Subheader */}
    </CHeader>
  )
}

export default TheHeader
