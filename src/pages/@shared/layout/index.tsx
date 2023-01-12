import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../../navigation/menus/navbar'

interface LayoutProps {
  children?: ReactNode
}

const menuItems = [
  {
    name: 'Home',
    relTo: '',
  },
  {
    name: 'Search',
    relTo: 'search',
  },
  {
    name: 'Progress',
    relTo: 'progress',
  },
]

export const LayoutPage: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar menuItems={menuItems} />
      <div className="App flex justify-center h-screenMinusNav items-center p-2">
        <div className="max-w-7xl">
          <Outlet />
          {children}
        </div>
      </div>
    </>
  )
}
