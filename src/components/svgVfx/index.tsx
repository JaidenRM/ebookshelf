import { SvgVfxType } from '../../@enums/svgVfx'
import { PaperVfx } from './paper'
import { WoodVfx } from './wood'

interface SvgVfxProps {
  vfxToEnable: SvgVfxType[]
}

export const SvgVfx = ({ vfxToEnable }: SvgVfxProps) => {
  return (
    <svg className="invisible absolute inset-0">
      <defs>
        {vfxToEnable.map((vfxType) => {
          switch (vfxType) {
            case SvgVfxType.Paper:
              return <PaperVfx key={vfxType} />
            case SvgVfxType.Wood:
              return <WoodVfx key={vfxType} />
            default:
              return <></>
          }
        })}
      </defs>
    </svg>
  )
}
