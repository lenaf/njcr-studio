'use client'

import Link from '../common/Link'
import siteData from '@/data/siteData';
import { usePathname } from 'next/navigation';

const NavLinks = ({ linkClass, className, ...rest }: React.HTMLProps<HTMLElement> & { linkClass?: string }) => {
  const pathname = usePathname()

  return (
    <nav className={`${className ?? ''} flex flex-col uppercase`} {...rest}>
      {siteData.navRoutes.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className={`${linkClass ?? ''} ${pathname === link.href ? 'font-black' : ''}`}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

export default NavLinks
