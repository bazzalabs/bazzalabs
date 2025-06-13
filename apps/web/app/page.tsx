import { BazzaLabsIcon } from '@bazzalabs/ui/icons/bazzalabs'
import { AvelinIcon } from '@bazzalabs/ui/icons/avelin'
import { BazzaUIIcon } from '@bazzalabs/ui/icons/bazzaui'
import { GithubIcon } from '@bazzalabs/ui/icons/github'
import { DiscordIcon } from '@bazzalabs/ui/icons/discord'
import { XIcon } from '@bazzalabs/ui/icons/x'
import { EnvelopeIcon } from '@bazzalabs/ui/icons/envelope'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@bazzalabs/ui/primitives/avatar'

const H = ({ children }: { children: React.ReactNode }) => (
  <span className="text-white font-medium">{children}</span>
)

export default function Page() {
  return (
    <div className="flex flex-col flex-1 items-center relative select-none pt-24 p-4">
      <div className="fixed top-0 left-0 -z-10 size-full mask-radial-from-20% mask-radial-to-50% mask-radial-at-center">
        <div className="mask-graph text-gray-12/20 absolute inset-0 -z-10 bg-current" />
      </div>
      <div className="flex flex-col w-full max-w-[600px] gap-24 sm:gap-32 my-auto">
        <div className="flex items-center gap-4 relative justify-evenly">
          <BazzaLabsIcon className="size-24 sm:size-38 shrink-0 text-primary fill-white" />
          <div className="flex flex-col gap-2 sm:gap-4">
            <h1
              className="tracking-[-0.030em] sm:tracking-[-0.038em] text-3xl sm:text-5xl font-[550]"
              style={{ fontVariationSettings: '"opsz" 28' }}
            >
              Bazza Labs<span className="text-(--gray-10)">, Inc.</span>
            </h1>

            <span className="text-lg sm:text-xl font-[450] text-gray-10 leading-5 sm:leading-9">
              We craft modern interfaces for the web.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-gray-11 font-[450] leading-7 text-sm sm:!text-base">
          <p>
            Bazza Labs is a small, independent software company. We build
            applications and tools that solve <H>real-world problems.</H>
          </p>
          <p>
            We partner with both ambitious <H>startups</H> and established{' '}
            <H>enterprises</H> to create web applications and developer tools
            that deliver meaningful, lasting value for users.
          </p>
          <p>
            <H>Remote-first</H> and proudly Canadian, we collaborate seamlessly
            across time zones and industries to sculpt digital experiences that
            are not only visually striking, but also <H>purposeful</H> and{' '}
            <H>results-driven</H>.
          </p>
        </div>
        <div className="flex flex-col gap-12 justify-center items-center">
          <h2
            className="text-3xl sm:text-4xl tracking-[-0.02em] font-[550] text-gray-12"
            style={{ fontVariationSettings: '"opsz" 28' }}
          >
            Projects
          </h2>
          <div className="flex justify-center items-center gap-16">
            <AvelinIcon className="size-24 sm:size-32 shrink-0 text-gray-12/50 transition-colors duration-300 ease-out hover:text-gray-12" />
            <BazzaUIIcon
              colored={false}
              className='size-22 sm:size-28 shrink-0 **:transition-colors **:duration-300 **:ease-out [&_[data-slot="circle-bottom"]]:fill-gray-12/30 [&_[data-slot="circle-top"]]:fill-gray-12/50  hover:[&_[data-slot="circle-top"]]:fill-[#eb0c0c]/75 hover:[&_[data-slot="circle-bottom"]]:fill-[#0067ff]/75'
            />
          </div>
        </div>
        <div className="flex flex-col gap-12 justify-center items-center">
          <h2
            className="text-3xl sm:text-4xl tracking-[-0.02em] font-[550] text-gray-12"
            style={{ fontVariationSettings: '"opsz" 28' }}
          >
            Team
          </h2>
          <div className="flex flex-col gap-4 items-center group">
            <Avatar className="size-16 sm:size-24 grayscale-100 group-hover:grayscale-0 duration-300 ease-out transition-[filter]">
              <AvatarFallback>KB</AvatarFallback>
              <AvatarImage src="/bazza.png" />
            </Avatar>
            <div className="flex flex-col gap-1 items-center text-sm sm:!text-base">
              <span className="font-medium translate-y-1 text-gray-11">
                Kian Bazarjani
              </span>
              <span className="text-gray-12">Founder & Lead Developer</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2.5">
          <span className="text-sm text-gray-10 font-[450]">{`© ${new Date().getFullYear()} Bazza Labs, Inc.`}</span>
          <div className="flex items-center gap-0.5 text-gray-10 *:hover-expand-2 *:transition-colors *:hover:text-gray-12 duration-300 ease-out">
            <button
              type="button"
              className="size-8 flex items-center justify-center hover:bg-gray-3 rounded-md"
            >
              <XIcon className="size-4" />
            </button>
            <button
              type="button"
              className="size-8 flex items-center justify-center hover:bg-gray-3 rounded-md"
            >
              <GithubIcon className="size-5" />
            </button>
            <button
              type="button"
              className="size-8 flex items-center justify-center hover:bg-gray-3 rounded-md"
            >
              <DiscordIcon className="size-5" />
            </button>
            <button
              type="button"
              className="size-8 flex items-center justify-center hover:bg-gray-3 rounded-md"
            >
              <EnvelopeIcon className="size-4.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
