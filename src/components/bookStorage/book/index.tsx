import clsx from 'clsx'
import { FastAverageColor } from 'fast-average-color'
import { useLayoutEffect, useState } from 'react'
import { invertColor } from '../../../utils/colour/invertColour'

interface BookProps {
  title: string
  coverUrl: string
  isActive?: boolean
  onClick?: () => void
}

const animationStyle = 'transition-all duration-500 ease will-change-auto'

export const Book = ({ title, coverUrl, onClick, isActive }: BookProps) => {
  const [mainColour, setMainColour] = useState('#FFFFFF')

  useLayoutEffect(() => {
    const coverImg = document.getElementById(
      'coverImg_' + title
    ) as HTMLImageElement
    if (!coverImg) return

    const fac = new FastAverageColor()
    fac
      .getColorAsync(coverImg)
      .then((colour) => {
        console.log(colour)
        if (colour.error) return
        setMainColour(colour.hex)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [title])

  return (
    <>
      <button
        role="listitem"
        key={title}
        onClick={() => {
          if (onClick) onClick()
        }}
        className={clsx(
          'flex shrink-0 flex-row items-center outline-none',
          !isActive && 'hover:-translate-y-4 focus-visible:-translate-y-4',
          isActive ? 'basis-60' : 'basis-12',
          animationStyle
        )}
        style={{ perspective: '1000px', WebkitPerspective: '1000px' }}
      >
        <div
          className={clsx(
            'z-50 h-full w-[44px] shrink-0 origin-right py-4 brightness-[0.80] contrast-[2.00]',
            animationStyle
          )}
          style={{
            backgroundColor: mainColour,
            color: invertColor(mainColour, true),
            transformStyle: 'preserve-3d',
            transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
              isActive ? '-60deg' : '0deg'
            }) rotateZ(0deg) skew(0deg, 0deg)`,
          }}
        >
          <span
            aria-hidden
            className="pointer-events-none fixed top-0 left-0 z-50 h-full w-full opacity-40 [filter:url(#paper)]"
          />
          <h2
            className="text-md m-auto font-medium"
            style={{ writingMode: 'vertical-lr' }}
          >
            {title}
          </h2>
        </div>
        <div
          className={clsx(
            'relative z-10 h-72 shrink-0 origin-left overflow-hidden border-gray-900 brightness-[0.80] contrast-[2.00]',
            animationStyle
          )}
          style={{
            transformStyle: 'preserve-3d',
            transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
              isActive ? '30deg' : '90deg'
            }) rotateZ(0deg) skew(0deg, 0deg)`,
          }}
        >
          <span
            aria-hidden
            className="pointer-events-none fixed top-0 right-0 z-50 h-full w-full opacity-40 [filter:url(#paper)]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 z-50 h-full w-full"
            style={{
              background: `linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.5) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.25) 9px, transparent 12px)`,
            }}
          />
          <img
            id={'coverImg_' + title}
            crossOrigin="anonymous"
            src={coverUrl}
            alt={title}
            className={clsx('h-full w-48 bg-cover', animationStyle)}
          />
        </div>
      </button>
    </>
  )
}
