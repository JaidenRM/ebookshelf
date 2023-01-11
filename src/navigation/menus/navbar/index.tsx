import { Link } from 'react-router-dom'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { Logo } from '../../../components/logo'

interface MenuItem {
  name: string
  relTo: string
}

interface NavbarProps {
  menuItems: MenuItem[]
}

interface MobileNavProps extends NavbarProps {}
interface DesktopNavProps extends NavbarProps {}

export const Navbar = ({ menuItems }: NavbarProps) => {
  const isMobile = useMediaQuery('(max-width: 639px)')

  return (
    <div className="text-3xl sm:text-xl">
      {isMobile && <MobileMenu menuItems={menuItems} />}
      {!isMobile && <DesktopMenu menuItems={menuItems} />}
    </div>
  )
}

const MobileMenu = ({ menuItems }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const isDisplayCss = isOpen ? 'h-screen' : 'h-0'

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="w-full z-nav border-b h-16 flex flex-row items-center px-2">
      <Logo className="w-16" />
      <div className="flex-1">
        <div
          className={`${isDisplayCss} absolute top-0 left-0 w-full z-nav transit overflow-hidden transition-all duration-500 ease-in`}
        >
          <ul className="flex flex-col justify-center items-center gap-16 flex-1 h-full">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.relTo} onClick={closeMenu}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <CgClose
            size="3rem"
            className="absolute top-2 right-2"
            onClick={closeMenu}
          />
        </div>
      </div>
      <div>
        <CgMenuRightAlt
          size="3rem"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
    </nav>
  )
}

const DesktopMenu = ({ menuItems }: DesktopNavProps) => {
  return (
    <nav className="w-full z-nav border-b h-16 px-2">
      <div className="max-w-7xl flex flex-row items-center m-auto h-full">
        <Logo className="w-16" />
        <ul className="flex justify-center items-center gap-16 h-full flex-1 z-nav">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link to={item.relTo}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="w-16"></div>
      </div>
    </nav>
  )
}
