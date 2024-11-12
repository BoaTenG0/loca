import { cn } from '@/lib/utils'
import { SlotProps } from 'input-otp'

export function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        'relative w-16 h-16 text-[2rem] mx-2',
        'flex items-center justify-center',
        'transition-all duration-300',
        'border-border border-y border-r border-l rounded-l-md rounded-r-md',
        'group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20',
        'outline outline-0 outline-accent-foreground/20',
        { 'outline-2 outline-gray-300': props.isActive }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  )
}
function FakeCaret() {
  return (
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
      <div className="w-px h-8 bg-white" />
    </div>
  )
}
