import Image from 'next/image'

export default function TechStack() {
  return (
    <>
      <div className='rounded-md border-emerald-50 border-2 p-2'>
        <ul className='grid grid-cols-4 gap-4'>
          <SkillListItem imageUrl='/skills/js-color.svg' name='Javascript' skillLink='https://www.javascript.com/' />
          <SkillListItem imageUrl='/skills/ts-color.svg' name='Typescript' skillLink='https://www.typescriptlang.org/' />
          <SkillListItem imageUrl='/skills/react.svg' name='React' skillLink='https://react.dev/' />
          <SkillListItem imageUrl='/skills/next.svg' name='Next.js' skillLink='https://nextjs.org/' />
          <SkillListItem imageUrl='/skills/node.svg' name='Node' skillLink='https://nodejs.org/en' />
          <SkillListItem imageUrl='/skills/go.svg' name='Go' skillLink='https://go.dev/' />
          <SkillListItem imageUrl='/skills/rust.svg' name='Rust' skillLink='https://www.rust-lang.org/' />
          <SkillListItem imageUrl='/skills/psql.svg' name='Postgres' skillLink='https://www.postgresql.org/' />
        </ul>
      </div>
    </>
  )
}

interface SkillListItemProps {
  imageUrl: string,
  skillLink: string,
  name: string,
}

const SkillListItem: React.FC<SkillListItemProps> = ({ imageUrl, name, skillLink }) => {
  return (
    <li className='flex justify-center items-center bg-emerald-50 text-black rounded-md border-emerald-50 border-2'>
      <a href={skillLink} >
        <Image
          src={imageUrl}
          width={64}
          height={64}
          alt={`${name} icon`}
        />
      </a>
    </li>
  )
}
