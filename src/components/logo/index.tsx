import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={className || ''}>
      <Link to="/">
        <img src={logo} alt="eBookshelf logo" />
      </Link>
    </div>
  )
}
