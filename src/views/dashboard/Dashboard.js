import React from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CFormGroup,
  CSelect,
  CButtonGroup,
  CButton,
  CPopover,
  CRow,
  CCol
} from '@coreui/react'
import { QuestionCircleOutlined } from '@ant-design/icons'

// render components
import PatientVisitsChart from '../../components/PatientVisitsChart'
import PatientNewOldVisitChart from '../../components/PatientNewOldVisitChart'
import PatientAppoinmentsChart from '../../components/PatientAppoinmentsChart'
import PatientActivitiesChart from '../../components/PatientActivitiesChart'

const Dashboard = () => {
  return (
    <>
      {/* START: Dashboard Control */}
      <CRow>
        <CCol xs='12' sm='12' md='4'>
          <CFormGroup row>
            <CCol xs='11' md='10'>
              <CFormGroup>
                <CSelect custom name='operational' id='operational'>
                  <option defaultValue='operational_overview'>
                    Opperational Overview
                  </option>
                  <option value='others'>Others</option>
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol xs='1' md='2 mt-1 px-0'>
              <CPopover
                content='Just ordinary selector!'
                placement='right'
                interactive
                trigger='click'
              >
                <QuestionCircleOutlined />
              </CPopover>
            </CCol>
          </CFormGroup>
        </CCol>
        <CCol xs='12' sm='5' md='3'>
          <CFormGroup>
            <CButtonGroup>
              <CButton className='btn-group-active'>Weekly</CButton>
              <CButton>Monthly</CButton>
              <CButton>Yearly</CButton>
            </CButtonGroup>
          </CFormGroup>
        </CCol>
        <CCol xs='12' sm='6' md='5'>
          <CRow>
            <CCol sm='' md='4'>
              <CFormGroup>
                <CSelect custom name='ccweek' id='ccweek'>
                  <option value='w3'>Week 3</option>
                  <option value='w2'>Week 2</option>
                  <option value='w1'>Week 1</option>
                  <option defaultValue='w4'>Week 4</option>
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol sm='' md='4'>
              <CFormGroup>
                <CSelect custom name='ccmonth' id='ccmonth'>
                  <option value='1'>January</option>
                  <option value='2'>February</option>
                  <option defaultValue='3'>March</option>
                  <option value='4'>April</option>
                  <option value='5'>May</option>
                  <option value='6'>June</option>
                  <option value='7'>July</option>
                  <option value='8'>August</option>
                  <option value='9'>September</option>
                  <option value='10'>October</option>
                  <option value='11'>November</option>
                  <option value='12'>December</option>
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol sm='' md='4'>
              <CFormGroup>
                <CSelect custom name='ccyear' id='ccyear'>
                  <option value='2017'>2017</option>
                  <option value='2018'>2018</option>
                  <option value='2019'>2019</option>
                  <option defaultValue='2020'>2020</option>
                  <option value='2021'>2021</option>
                  <option value='2022'>2022</option>
                  <option value='2023'>2023</option>
                  <option value='2024'>2024</option>
                  <option value='2025'>2025</option>
                  <option value='2026'>2026</option>
                </CSelect>
              </CFormGroup>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      {/* END: Dashboard Control */}

      {/* START: Cards Info */}
      <CRow>
        <CCol xs='12' sm='6' md=''>
          <CCard className='text-center'>
            <CCardBody>
              <div className='text-value-lg'>39</div>
              <div className='text-uppercase text-muted small'>
                Patient Visits
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs='12' sm='6' md=''>
          <CCard className='text-center'>
            <CCardBody>
              <div className='text-value-lg'>55</div>
              <div className='text-uppercase text-muted small'>
                Patient Appointments
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs='12' sm='12' md=''>
          <CCard className='text-center'>
            <CCardBody className='row text-center'>
              <CCol>
                <div className='text-value-lg'>27</div>
                <div className='text-uppercase text-muted small'>Male</div>
              </CCol>
              <div className='c-vr' />
              <CCol>
                <div className='text-value-lg'>13</div>
                <div className='text-uppercase text-muted small'>Female</div>
              </CCol>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs='12' sm='6' md=''>
          <CCard className='text-center'>
            <CCardBody>
              <div className='text-value-lg'>23</div>
              <div className='text-uppercase text-muted small'>
                New Patient Visits
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs='12' sm='6' md=''>
          <CCard className='text-center'>
            <CCardBody>
              <div className='text-value-lg'>16</div>
              <div className='text-uppercase text-muted small'>
                Old Patient Visits
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {/* END: Cards Info */}

      {/* START: Charts */}
      <CCardGroup columns className='cols-2'>
        {/* START: Patient Visits */}
        <CCard>
          <CCardHeader>Patient visits</CCardHeader>
          <CCardBody>
            <PatientVisitsChart />
          </CCardBody>
        </CCard>
        {/* END: Patient Visits */}

        {/* START: New vs Old Patient Visit */}
        <CCard>
          <CCardHeader>New vs Old Patient Visit</CCardHeader>
          <CCardBody>
            <PatientNewOldVisitChart />
          </CCardBody>
        </CCard>
        {/* END: New vs Old Patient Visit */}

        {/* START: Patient Appointments */}
        <CCard>
          <CCardHeader>Patient Appointments</CCardHeader>
          <CCardBody>
            <PatientAppoinmentsChart />
          </CCardBody>
        </CCard>
        {/* START: Patient Appointments */}

        {/* START: Cancelled vs Non-cancelled Activities */}
        <CCard>
          <CCardHeader>Cancelled vs Non-cancelled Activities</CCardHeader>
          <CCardBody>
            <PatientActivitiesChart />
          </CCardBody>
        </CCard>
        {/* END: Cancelled vs Non-cancelled Activities */}
      </CCardGroup>
      {/* END: Charts */}
    </>
  )
}

export default Dashboard
