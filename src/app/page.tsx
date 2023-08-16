import Image from 'next/image'
import TechStack from './tech-stack'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col w-full min-h-screen items-center justify-center px-64">
        <h1 className="mb-2 mt-0 text-6xl font-medium leading-tight text-emerald-50">Hey, I'm Chris</h1>
        <h3 className="text-4xl font-medium text-emerald-50 pb-16">I'm a full stack web developer with over 6 years of experience in industries ranging from office furniture to security.<br /><br />Below are some of my most used technologies.</h3>

        <TechStack />

        <div className="flex flex-col p-3 m-3 gap-2 bg-emerald-50 fixed bottom-1 right-1 rounded-full">
          <SocialLink url='https://github.com/flippinberger' imagePath='/git.svg' />
          <SocialLink url='https://twitter.com/drchrisberger' imagePath='/twitter.svg' />
          <SocialLink url='https://www.linkedin.com/in/christopher-berger-76b2848a' imagePath='/linkedin-color.svg' />
          <SocialLink url='mailto:flippinberger@gmail.com' imagePath='/mail.svg' />
        </div>
      </div>
    </main>
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
        // className='hover:border-emerald-200 hover:border-2 hover:rounded-full'
        className='hover:animate-spin'
      />
    </a>
  )
}

