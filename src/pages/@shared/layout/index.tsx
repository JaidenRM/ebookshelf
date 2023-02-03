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
  {
    name: 'Rankings',
    relTo: 'rankings',
  },
]

export const LayoutPage: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar menuItems={menuItems} />
      <div className="App flex justify-center h-screenMinusNav p-2">
        <div className="max-w-7xl w-full mt-4">
          <Outlet />
          {children}
        </div>
      </div>
    </>
  )
}
