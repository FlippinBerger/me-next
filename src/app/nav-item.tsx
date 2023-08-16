'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  title: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, path }) => {
  const pathName = usePathname()
  return (
    <Link href={path}>
      <h3 className={`text-3xl font-medium text-emerald-50 hover:text-4xl ${pathName === path && 'underline'}`}>
        {title}
      </h3>
    </Link>
  )
}

export default NavItem;
