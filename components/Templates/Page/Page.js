import s from './Page.module.css'
import { Text } from '@/components/Atoms'
import { Slider } from '@/components/Organisms'

export const Page = () => {
  return (
    <main className="pl-[24px] sm:pl-0">
      <Text
        as="h1"
        variant="title"
        additionalClasses="w-full text-left sm:text-center mx-auto sm:max-w-[500px] mb-[36px] sm:mb-[55px] pr-[24px] sm:pr-0"
      >
        Don't trust us, trust our clients
      </Text>

      <Slider />
    </main>
  )
}
