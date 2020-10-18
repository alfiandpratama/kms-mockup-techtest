import React from 'react'
import {
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CLabel,
  CInput,
  CInputCheckbox,
  CButton,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Registration = () => {
  return (
    <div className='registration'>
      {/* START: Menu Content */}
      <aside className='menu-content'>
        <h5>New Registration</h5>

        <ul className='menu-content__list'>
          <li>
            <a href='/registration'>Create Registration</a>
          </li>
          <ul className='menu-content__sublist'>
            <li className='menu-content--active'>
              <a href='#Registration_Type'>Registration Type</a>
            </li>
            <li>
              <a href='#Search_Patient'>Search or Add New Patient</a>
            </li>
            <li>
              <a href='#Time_Slot'>Time Slot</a>
            </li>
            <li>
              <a href='#Service_Detail'>Service Detail</a>
            </li>
          </ul>
          <li>
            <a href='/dashboard'>Finalize Registration</a>
          </li>
        </ul>
      </aside>
      {/* END: Menu Content */}

      {/* START: Form Content */}
      <div className='form-content'>
        <h3>Registration Setup</h3>

        <CForm>
          {/* START: Registration type */}
          <fieldset id='Registration_Type'>
            <legend>Registration type</legend>
            <hr />
            <CRow>
              <CCol xs='12' sm='4' md='3'>
                <CFormGroup className='mb-1'>
                  <CLabel htmlFor='registration-type'>Registration type</CLabel>
                  <CSelect
                    custom
                    name='registration-type'
                    id='registration-type'
                  >
                    <option>General</option>
                    <option>Partnership</option>
                  </CSelect>
                </CFormGroup>
                <div className='d-flex'>
                  <CInputCheckbox
                    id='isAppoinment'
                    name='isAppoinment'
                    value='true'
                    className='ml-0'
                  />
                  <CLabel htmlFor='isAppoinment' className='ml-4'>
                    <CFormText>Is an appoinment</CFormText>
                  </CLabel>
                </div>
              </CCol>
              <CCol xs='12' sm='4' md='4'>
                <CFormGroup>
                  <CLabel htmlFor='registration-location'>
                    Registration location
                  </CLabel>
                  <CSelect
                    custom
                    name='registration-location'
                    id='registration-location'
                  >
                    <option>Clinic A</option>
                    <option>Clinic B</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol xs='12' sm='4' md='3'>
                <CFormGroup>
                  <CLabel htmlFor='service'>Service</CLabel>
                  <CSelect custom name='service' id='service'>
                    <option>Outpatient</option>
                    <option>Inpatient</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
            </CRow>
          </fieldset>
          {/* END: Registration type */}

          {/* START: Search or Add New Patient */}
          <fieldset id='Search_Patient'>
            <legend>Search or Add New Patient</legend>
            <hr />
            <CRow>
              <CCol xs='12' sm='12' md='6'>
                <CRow>
                  <CCol md='7'>
                    <CFormGroup className='mb-1'>
                      <CLabel htmlFor='search-patient'>Search Patient</CLabel>
                      <CInput
                        id='search-patient'
                        placeholder='Search or Scan Barcode'
                      />
                    </CFormGroup>
                    <div className='d-flex'>
                      <CInputCheckbox
                        id='isUnknownPatient'
                        name='isUnknownPatient'
                        value='true'
                        className='ml-0'
                      />
                      <CLabel htmlFor='isUnknownPatient' className='ml-4'>
                        <CFormText>Unknown Patient</CFormText>
                      </CLabel>
                    </div>
                  </CCol>
                  <CCol md='5'>
                    <CFormGroup>
                      <CLabel htmlFor='search-by'>Search by</CLabel>
                      <CSelect custom name='search-by' id='search-by'>
                        <option>Patient ID</option>
                        <option>Patient Name</option>
                      </CSelect>
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCol>
              <CCol
                md='1'
                className='d-flex align-items-center justify-content-center'
              >
                <b>OR</b>
              </CCol>
              <CCol xs='12' md='4' className='d-flex align-items-center'>
                <CButton aria-label='Create New Patient' color='primary'>
                  <CIcon name='cil-plus' className='mr-2' />
                  Create New Patient
                </CButton>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs='12' sm='5' md='5'>
                <CFormGroup className='mt-3'>
                  <CLabel htmlFor='payment-type' className='font-weight-bold'>
                    Payment type&#42;
                  </CLabel>
                  <CSelect custom name='payment-type' id='payment-type'>
                    <option>Select Payment Type</option>
                    <option>Cash</option>
                    <option>Credit Card</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
            </CRow>
          </fieldset>
          {/* END: Search or Add New Patient */}

          {/* START: Time Slot */}
          <fieldset id='Time_Slot'>
            <legend>Time Slot</legend>
            <hr />
            <CRow>
              <CCol xs='12' sm='4' md='4'>
                <CFormGroup className='mb-1'>
                  <CLabel htmlFor='date-slot'>Select Date/DateRange</CLabel>
                  <CInput
                    type='date'
                    id='date-slot'
                    name='date-slot'
                    placeholder='Select Date'
                  />
                </CFormGroup>
              </CCol>
              <CCol xs='12' sm='4' md='4'>
                <CFormGroup>
                  <CLabel htmlFor='search-staff-slot'>Medical Staff</CLabel>
                  <CSelect
                    custom
                    name='search-staff-slot'
                    id='search-staff-slot'
                  >
                    <option>Search Medical Staff</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
            </CRow>
          </fieldset>
          {/* END: Time Slot */}

          {/* START: Service Detail */}
          <fieldset id='Service_Detail'>
            <legend>Service Detail</legend>
            <hr />
          </fieldset>
          <CRow>
            <CCol xs='12' sm='2' md='2'>
              <CFormGroup>
                <CLabel htmlFor='urgency-level'>Urgency Level</CLabel>
                <CSelect custom name='urgency-level' id='urgency-level'>
                  <option>Yes</option>
                  <option>No</option>
                </CSelect>
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs='12' md='6'>
              <CFormGroup>
                <CLabel htmlFor='purpose'>Purpose</CLabel>
                <CInput id='purpose' placeholder='Purpose' />
              </CFormGroup>
            </CCol>
            <CCol xs='12' md='6'>
              <CFormGroup>
                <CLabel htmlFor='admission-diagnosis'>
                  Admission Diagnosis
                </CLabel>
                <CInput
                  id='admission-diagnosis'
                  placeholder='admission-diagnosis'
                />
              </CFormGroup>
            </CCol>
          </CRow>
          {/* END: Service Detail */}
        </CForm>
        <CRow className='form-action'>
          <CCol className='d-flex justify-content-end align-items-center flex-grow-1'>
            <CButton aria-label='Next Step' color='primary'>Next</CButton>
          </CCol>
        </CRow>
      </div>
      {/* END: Form Content */}
    </div>
  )
}

export default Registration
