import { BookStorage } from '../../../components/bookStorage'
import { books } from '../../../components/bookStorage/jrm-test-book-data'

export const HomePage = () => {
  return (
    <>
      <BookStorage books={books} />
    </>
  )
}
