import { BazzaLabsIcon } from '@bazzalabs/ui/icons/bazzalabs'
import { AvelinIcon } from '@bazzalabs/ui/icons/avelin'
import { BazzaUIIcon } from '@bazzalabs/ui/icons/bazzaui'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@bazzalabs/ui/primitives/avatar'

const H = ({ children }: { children: React.ReactNode }) => (
  <span className="text-white font-medium">{children}</span>
)

export function Home() {
  return (
    <div className="flex flex-col flex-1 items-center relative select-none py-24">
      <div className="fixed top-0 left-0 -z-10 size-full mask-radial-from-20% mask-radial-to-80% mask-radial-at-center">
        <div className="mask-graph text-gray-12/20 absolute inset-0 -z-10 bg-current" />
      </div>
      <div className="flex flex-col w-full max-w-[600px] gap-32 my-auto">
        <div className="flex items-center gap-4 relative justify-evenly">
          <BazzaLabsIcon className="size-38 shrink-0 text-primary fill-white" />
          <div className="flex flex-col gap-4">
            <h1
              className="tracking-[-0.038em] text-5xl font-[550]"
              style={{ fontVariationSettings: '"opsz" 28' }}
            >
              Bazza Labs<span className="text-(--gray-10)">, Inc.</span>
            </h1>

            <span className="text-xl font-[450] text-gray-10">
              We craft modern interfaces for the web.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-gray-11 font-[450] leading-7">
          <p>
            Bazza Labs is a small, independent software company dedicated to
            crafting elegant web applications and tools that solve{' '}
            <H>real-world problems.</H>
          </p>
          <p>
            We blend <H>technical expertise</H> with a relentless focus on
            crafting <H>modern, timeless interfaces</H>. We take pride in every
            line of code we write and every interface we design.
          </p>
          <p>
            <H>Remote-first</H> and proudly <H>Canadian</H>, Bazza Labs combines
            the nimbleness of a boutique studio with the ambition to push
            boundaries on every project. As a one-person powerhouse, we’re able
            to move at <H>lightning speed</H>.
          </p>
        </div>
        <div className="flex flex-col gap-12 justify-center items-center">
          <h2
            className="text-4xl tracking-[-0.02em] font-[550] text-gray-12"
            style={{ fontVariationSettings: '"opsz" 28' }}
          >
            Projects
          </h2>
          <div className="flex justify-center items-center gap-16">
            <AvelinIcon className="size-32 shrink-0 text-gray-12/50 transition-colors duration-300 ease-out hover:text-gray-12" />
            <BazzaUIIcon
              colored={false}
              className='size-28 shrink-0 **:transition-colors **:duration-300 **:ease-out [&_[data-slot="circle-bottom"]]:fill-gray-12/30 [&_[data-slot="circle-top"]]:fill-gray-12/50  hover:[&_[data-slot="circle-top"]]:fill-[#eb0c0c]/75 hover:[&_[data-slot="circle-bottom"]]:fill-[#0067ff]/75'
            />
          </div>
        </div>
        <div className="flex flex-col gap-12 justify-center items-center">
          <h2
            className="text-4xl tracking-[-0.02em] font-[550] text-gray-12"
            style={{ fontVariationSettings: '"opsz" 28' }}
          >
            Team
          </h2>
          <div className="flex flex-col gap-4 items-center group">
            <Avatar className="size-24 grayscale-100 group-hover:grayscale-0 duration-300 ease-out transition-[filter]">
              <AvatarFallback>KB</AvatarFallback>
              <AvatarImage src="/bazza.png" />
            </Avatar>
            <div className="flex flex-col gap-1 items-center">
              <span className="font-medium translate-y-1 text-gray-11">
                Kian Bazarjani
              </span>
              <span className="text-gray-12">Founder & Lead Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.theme = 'dark'

export default Home
