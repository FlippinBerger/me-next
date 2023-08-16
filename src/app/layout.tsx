import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
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
          <NavItem path='/pages/about' title='About' />
          {/* <NavItem path='/pages/projects' title='Projects' />
          <NavItem path='/pages/birds' title='Birds' />
          <NavItem path='/pages/adventures' title='Adventures' />
          <NavItem path='/pages/blog' title="Blog" /> */}
        </div>
        {children}

        <div className="flex flex-col p-3 m-3 gap-2 bg-emerald-50 fixed bottom-1 right-1 rounded-full">
          <SocialLink url='https://github.com/flippinberger' imagePath='/git.svg' />
          <SocialLink url='https://open.spotify.com/user/chrisbergerr?si=bd328fafb9644782' imagePath='/spotify.svg' />
          <SocialLink url='https://www.goodreads.com/user/show/161613962-chris-berger' imagePath='/goodreads.svg' />
          <SocialLink url='https://www.linkedin.com/in/christopher-berger-76b2848a' imagePath='/linkedin-color.svg' />
          <SocialLink url='mailto:flippinberger@gmail.com' imagePath='/mail.svg' />
          {/* <SocialLink url='https://twitter.com/drchrisberger' imagePath='/twitter.svg' /> */}
        </div>
      </body>
    </html>
  )
}

interface SocialLinkProps {
  url: string,
  imagePath: string,
}

const SocialLink: React.FC<SocialLinkProps> = ({ url, imagePath }) => {
  return (
    <a href={url} target='_blank'>
      <Image
        src={imagePath}
        width={32}
        height={32}
        alt={`${url}`}
        className='hover:animate-spin'
      />
    </a>
  )
}