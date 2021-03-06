import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
  const itemsCount = 1
  return (
    <CDropdown inNav className='c-header-nav-items mx-2' direction='down'>
      <CDropdownToggle className='c-header-nav-link' caret={false}>
        <div className='c-avatar'>
          <CIcon name='cil-bell' />
        </div>
        <CBadge shape='pill' color='danger' className='bottom'>
          {itemsCount}
        </CBadge>
      </CDropdownToggle>
      <CDropdownMenu className='pt-0' placement='bottom-end'>
        <CDropdownItem header tag='div' color='light' className='text-center'>
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name='cil-bell' className='mfe-2' />
          Updates
          <CBadge color='info' className='mfs-auto'>
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name='cil-task' className='mfe-2' />
          Tasks
          <CBadge color='danger' className='mfs-auto'>
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem header tag='div' color='light' className='text-center'>
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name='cil-user' className='mfe-2' />
          Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name='cil-settings' className='mfe-2' />
          Settings
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name='cil-credit-card' className='mfe-2' />
          Payments
          <CBadge color='secondary' className='mfs-auto'>
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem>
          <CIcon name='cil-lock-locked' className='mfe-2' />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
