import manage_icon from '../images/manage_icon.png'
import finance_icon from '../images/finance_icon.png'
import new_induction_icon from '../images/new_induction_icon.png'
import user_icon from '../images/user_icon.png'

import report_icon from '../images/report_icon.png'

const SideBarTreeData = [
  {
    id: 1,
    label: 'New Induction',
    image: new_induction_icon,
    child: [
      {
        id: 1,
        label: 'Person Master',
        child: []
      },
      {
        id: 2,
        label: 'Car Master',
        child: []
      },
      {
        id: 3,
        label: 'Driver Management',
        child: []
      }
    ]
  },
  {
    id: 2,
    label: 'Manage',
    image: manage_icon,
    child: []
  },
  {
    id: 3,
    label: 'Finance',
    image: finance_icon,
    child: []
  },
  {
    id: 4,
    label: 'User Management',
    image: user_icon,
    child: []
  },
  {
    id: 5,
    label: 'Report',
    image: report_icon,
    child: []
  }
]
export default SideBarTreeData
