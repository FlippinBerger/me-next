import './globals.css'
import { Inter } from 'next/font/google'
import NavItem from './nav-item';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'flippin',
  description: 'Personal website for flippin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col w-32 pl-4 mt-4 gap-2 fixed top-1 left-1">
          <NavItem path='/' title='Chris' />
          <NavItem path='/pages/projects' title='Projects' />
          <NavItem path='/pages/birds' title='Birds' />
          <NavItem path='/pages/adventures' title='Adventures' />
          <NavItem path='/pages/blog' title="Blog" />
        </div>
        {children}
      </body>
    </html>
  )
}
