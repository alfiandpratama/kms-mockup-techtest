import React from 'react'
import { Link } from 'react-router-dom'
import {
  CDataTable,
  CBadge,
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CInputCheckbox,
  CSelect,
  CButtonGroup,
  CButton
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// static registration data
import RegistrationData from '../../data/registration.data'
// datatable utils
import { getBadge, fields } from '../../utils/datatable.utils'

const Registrations = () => {
  return (
    <>
      {/* START: Title & View Table Control */}
      <CRow>
        <CCol md='8'>
          <h4>Registration</h4>
          <p>Search & manage existing registrations or create new.</p>
        </CCol>
        <CCol md='4'>
          <CFormGroup>
            <CButtonGroup>
              <CButton className='btn-group-active'>
                <CIcon name='cil-list' className='mr-2' />
                List view
              </CButton>
              <CButton>
                <CIcon name='cil-calendar' className='mr-2' />
                Schedule view
              </CButton>
            </CButtonGroup>
          </CFormGroup>
        </CCol>
      </CRow>
      {/* END: Title & View Table Control */}

      {/* START: Create New Button */}
      <CRow>
        <CCol className='text-right' md='12'>
          <Link to='/registration'>
            <CButton color='primary' size='md'>
              <CIcon name='cilPlus' className='mr-2' />
              Create New
            </CButton>
          </Link>
        </CCol>
      </CRow>
      {/* END: Create New Button */}

      {/* START: Filter Table Control */}
      <CRow>
        <CCol xs='12' sm='12' md='3'>
          <CFormGroup>
            <CLabel htmlFor='registration-type'>Registration type</CLabel>
            <CSelect custom name='registration-type' id='registration-type'>
              <option defaultValue='all'>All Registration</option>
              <option value='general'>General</option>
              <option value='partnership'>Partnership</option>
            </CSelect>
          </CFormGroup>
        </CCol>
        <CCol xs='12' sm='12' md='6'>
          <CRow>
            <CCol md='7'>
              <CFormGroup>
                <CLabel htmlFor='search'>Search</CLabel>
                <CInput id='search' placeholder='Search...' />
              </CFormGroup>
            </CCol>
            <CCol md='5'>
              <CFormGroup>
                <CLabel htmlFor='search-by'>Search by</CLabel>
                <CSelect custom name='search-by' id='search-by'>
                  <option defaultValue='medical_staff'>Medical Staff</option>
                  <option value='services'>Services</option>
                  <option value='patient_name'>Patient name</option>
                </CSelect>
              </CFormGroup>
            </CCol>
          </CRow>
        </CCol>
        <CCol xs='12' sm='12' md='3' className='d-flex align-items-end pb-2'>
          <p>
            <u>Advanced Filters</u>
          </p>
        </CCol>
      </CRow>
      {/* END: Filter Table Control */}

      {/* START: Registrations Table */}
      <CRow>
        <CCol xs='12' lg='12' md='12'>
          <CDataTable
            addTableClasses='table-default'
            items={RegistrationData}
            fields={fields}
            striped
            itemsPerPage={5}
            pagination
            scopedSlots={{
              checkbox_row: () => (
                <td>
                  <CInputCheckbox
                    id='checkbox1'
                    name='checkbox1'
                    value='option1'
                    className='ml-0'
                  />
                </td>
              ),
              status: (item) => (
                <td>
                  <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                </td>
              ),
              commands: (item) => (
                <td className='table-commands border-left-column'>
                  <div>
                    <Link to='/registration'>
                      <CIcon name='cil-pencil' />
                      <p className='mb-0'>Edit</p>
                    </Link>
                  </div>
                  <div>
                    <Link to='/registration'>
                      <CIcon name='cil-trash' />
                      <p className='mb-0'>Delete</p>
                    </Link>
                  </div>
                  <div>
                    <Link to='/registration'>
                      <CIcon name='cil-expand-down' />
                      <p className='mb-0'>Expand</p>
                    </Link>
                  </div>
                  <div>
                    <Link to='/registration'>
                      <CIcon name='cil-ethernet' />
                      <p className='mb-0'>More</p>
                    </Link>
                  </div>
                </td>
              )
            }}
          />
        </CCol>
      </CRow>
      {/* END: Registrations Table */}
    </>
  )
}

export default Registrations
