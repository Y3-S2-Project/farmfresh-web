import BasketIcon from '../assets/icons/BasketIcon'
import LogoutIcon from '../assets/icons/LogoutIcon'
import NotificationBellIcon from '../assets/icons/NotificationBellIcon'
import SettingsIcon from '../assets/icons/SettingsIcon'
import SwitchRoleIcon from '../assets/icons/SwitchRoleIcon'
import UserIcon from '../assets/icons/UserIcon'

export const CUSTOMER_NAV_MENU_ONE = ['Home', 'Products', 'Orders', 'About Us']
export const CUSTOMER_NAV_MENU_TWO = [<NotificationBellIcon />, <BasketIcon />]

export const NAV_DROPDOWN = [
  {
    label: 'My profile',
    icon: <UserIcon />,
  },
  {
    label: 'Settings',
    icon: <SettingsIcon />,
  },
  {
    label: 'Switch to ',
    icon: <SwitchRoleIcon />,
  },
  {
    label: 'Log out',
    icon: <LogoutIcon />,
  },
]

export const ROLES = {
  CUSTOMER: 'CUSTOMER',
  FARMER: 'FARMER',
  ADMIN: 'ADMIN',
}
export const PRODUCT_TABLE_HEADER_CONTENT = [
  'PID',
  'Name',
  'Availability',
  'Offer',
  'Image',
  'Approval',

  'Updated At',
  'Actions',
]

export const DUMMY_CATEGORIES = [
  {
    _id: '645728af06a304a6a8282be5',
    category_name: 'Fruits',
    category_image:
      'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
    category_description:
      'This category can include a variety of fresh, frozen, or canned fruits, such as apples, bananas, oranges, and strawberries',
    category_status: 'Available',
    category_id: 'CAT002',
    createdAt: '2023-05-07T04:27:27.560Z',
    updatedAt: '2023-05-07T04:27:27.560Z',
  },
  {
    _id: '645728b106a304a6a8282be8',
    category_name: 'Fruits',
    category_image:
      'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
    category_description:
      'This category can include a variety of fresh, frozen, or canned fruits, such as apples, bananas, oranges, and strawberries',
    category_status: 'Available',
    category_id: 'CAT002',
    createdAt: '2023-05-07T04:27:29.184Z',
    updatedAt: '2023-05-07T04:27:29.184Z',
  },
  {
    _id: '645a3bc88e8a89996187b89e',
    category_name: 'Fruits',
    category_image:
      'https://firebasestorage.googleapis.com/v0/b/upload-file-aaea2.appspot.com/o/itemsImages%2FGraph-From%20google%20form%20responses%20(1).PNG86597993-7f2a-4014-ae76-0883bc0daef4?alt=media&token=3c6cac81-fa24-4e57-8629-383f19a63a2a',
    category_description:
      'This category can include a variety of fresh, frozen, or canned fruits, such as apples, bananas, oranges, and strawberries',
    category_status: 'Available',
    category_id: 'CAT002',
    createdAt: '2023-05-09T12:25:44.203Z',
    updatedAt: '2023-05-09T12:25:44.203Z',
  },
]

export const CATEGORY_TABLE_HEADER_CONTENT = [
  'Name',
  'CID',
  'Image',
  'Status',
  'Description',
  'Updated At',
  'Actions',
]
