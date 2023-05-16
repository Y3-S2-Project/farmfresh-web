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
