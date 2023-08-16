import TechStack from './tech-stack'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col w-full min-h-screen items-center justify-center px-64">
        <h1 className="mb-2 mt-0 text-6xl font-medium leading-tight text-emerald-50">Hey, I'm Chris</h1>
        <h3 className="text-4xl font-medium text-emerald-50 pb-16">I'm a full stack web developer with over 6 years of experience in industries ranging from office furniture to security.<br /><br />Below are some of my most used technologies.</h3>
        <TechStack />
      </div>
    </main>
  )
}


