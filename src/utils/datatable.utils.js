export const getBadge = (status) => {
  switch (status) {
    case 'Active':
      return 'success'
    case 'Inactive':
      return 'secondary'
    case 'Waiting':
      return 'warning'
    case 'Banned':
      return 'danger'
    default:
      return 'primary'
  }
}

export const fields = [
  {
    key: 'checkbox_row',
    label: '',
    _style: { width: '5%' },
    sorter: false,
    filter: false
  },
  { key: 'service' },
  { key: 'visit_date' },
  { key: 'patient_name' },
  { key: 'medical_staff' },
  { key: 'status' },
  {
    key: 'commands',
    label: 'Commands',
    _style: { width: '30%' },
    sorter: false,
    filter: false
  }
]
