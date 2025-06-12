import { cn } from '@bazzalabs/ui/lib/utils'

export function BazzaUIIcon({
  colored = true,
  ...props
}: { colored?: boolean } & React.SVGProps<SVGSVGElement>) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      viewBox="30 30 175 175"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        data-slot="circle-top"
        cx="90"
        cy="90"
        r="60"
        className={cn(colored ? 'fill-[#eb0c0c]/75' : 'fill-white/80')}
      />
      <circle
        data-slot="circle-bottom"
        cx="145"
        cy="145"
        r="60"
        className={cn(colored ? 'fill-[#0067ff]/75' : 'fill-white/60')}
      />
    </svg>
  )
}
