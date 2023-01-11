import { useElementSize } from 'usehooks-ts'
import { SvgVfxType } from '../../@enums/svgVfx'
import { IBook } from '../../@types/book'
import { SvgVfx } from '../svgVfx'
import { Bookshelf } from './bookshelf'

interface BookStorageProps {
  books: IBook[]
}

type BooksPerShelf = { [index: number]: IBook[] }

const getMaxBooksPerShelf = (spaceWidthPx: number, bookWidthPx: number) => {
  const emptySpace = bookWidthPx * 4

  const approxBooks = Math.max(spaceWidthPx - emptySpace, 0) / bookWidthPx
  return Math.floor(approxBooks)
}

const svgVfxToEnable = [SvgVfxType.Paper, SvgVfxType.Wood]

export const BookStorage = ({ books }: BookStorageProps) => {
  const [containerRef, { width }] = useElementSize()

  const booksPerShelf = getMaxBooksPerShelf(width, 50)
  const groupedBooks = books.reduce<BooksPerShelf>((acc, curr, index) => {
    const key = Math.floor(index / booksPerShelf)
    acc[key] = [...(acc[key] || []), curr]

    return acc
  }, {})

  return (
    <div ref={containerRef}>
      <SvgVfx vfxToEnable={svgVfxToEnable} />
      {Object.keys(groupedBooks).map((shelfIndex, index) => (
        <Bookshelf
          key={shelfIndex}
          books={groupedBooks[Number(shelfIndex)]}
          className={index > 0 ? 'mt-8' : ''}
        />
      ))}
    </div>
  )
}
