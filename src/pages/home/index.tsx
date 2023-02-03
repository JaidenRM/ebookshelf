import { BookStorage } from '../../components/bookStorage'
import { books } from '../../components/bookStorage/jrm-test-book-data'

export const HomePage = () => {
  return (
    <div className="h-full flex items-center">
      <BookStorage books={books} />
    </div>
  )
}
