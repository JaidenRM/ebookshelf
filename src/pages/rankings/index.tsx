import { IBook } from '../../@types/book'
import { IReview } from '../../@types/review'
import clsx from 'clsx'
import { useModalContext } from '../../providers/modal'
import { ModalWrapper } from '../@shared/modalWrapper'

type ReviewedBook = IBook & IReview
interface RankingPageProps {
  reviewedBooks: ReviewedBook[]
}

export const RankingPage = ({ reviewedBooks }: RankingPageProps) => {
  const [, { setChild, toggleDisplay }] = useModalContext()

  const hasReviews = !!(reviewedBooks && reviewedBooks.length)

  return (
    <div className="flex justify-center">
      {!hasReviews && (
        <h2 className="px-2">
          Sorry, it doesn't look like you have any reviewed books to use here
        </h2>
      )}
      {hasReviews && (
        <div className="border border-primaryBg rounded-lg w-full">
          <div className="flex justify-center font-bold border-b border-primaryBg p-2">
            <div className="flex-1">#</div>
            <div className="flex-2">Rating</div>
            <div className="flex-8">Title</div>
            <div className="hidden sm:block flex-4">Authors</div>
            <div className="flex-4 sm:flex-8">Comment</div>
          </div>
          {reviewedBooks
            .sort(
              (a, b) =>
                b.rating.numerator / b.rating.denominator -
                a.rating.numerator / a.rating.denominator
            )
            .map((book, index) => (
              <div
                key={book.title}
                className={clsx(
                  'flex justify-center p-2',
                  index % 2 === 1 && 'bg-primaryFgLightest'
                )}
              >
                <div className="flex-1">{index + 1}</div>
                <div className="flex-2">
                  {book.rating.numerator}/{book.rating.denominator}
                </div>
                <div className="flex-8">
                  {book.title}
                  <p className="sm:hidden italic">{book.authors.join(', ')}</p>
                </div>
                <div className="hidden sm:block flex-4">
                  {book.authors.join(', ')}
                </div>
                <div
                  className="flex-4 overflow-hidden text-ellipsis line-clamp-5 sm:flex-8"
                  onClick={() =>
                    setChild(
                      <ModalWrapper
                        modalChild={
                          book.comment +
                          `Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum), true)}>
                  {book.comment} Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum`
                        }
                        onClose={toggleDisplay}
                      />,
                      true
                    )
                  }
                >
                  {book.comment} Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}
