import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from '../../pages/@shared/error'
import { HomePage } from '../../pages/home'
import { LayoutPage } from '../../pages/@shared/layout'
import { ProgressPage } from '../../pages/progress'
import { SearchPage } from '../../pages/search'
import { RankingPage } from '../../pages/rankings'
import { reviewedBooks } from '../../components/bookStorage/jrm-test-book-data'

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'search',
          element: <SearchPage />,
        },
        {
          path: 'progress',
          element: <ProgressPage />,
        },
        {
          path: 'rankings',
          element: <RankingPage reviewedBooks={reviewedBooks} />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
