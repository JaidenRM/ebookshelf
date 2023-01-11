import { useState } from 'react'
import { IBook } from '../../../@types/book'
import { Book } from '../book'

interface BookshelfProps {
  books: IBook[]
  className?: string
}

export const Bookshelf = ({ books, className }: BookshelfProps) => {
  const [focussedIndex, setFocussedIndex] = useState(-1)

  return (
    <div className={className || ''}>
      <div className="flex justify-center">
        {books.map((book, index) => (
          <Book
            key={`${index}_${book.title}`}
            {...book}
            onClick={() =>
              setFocussedIndex((prev) => {
                if (prev === index) return -1
                return index
              })
            }
            isActive={focussedIndex === index}
          />
        ))}
      </div>
      <div className="[filter:url(#wood)] h-[2rem] border"></div>
    </div>
  )
}
