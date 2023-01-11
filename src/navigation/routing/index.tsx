import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from '../pages/error'
import { HomePage } from '../pages/home'
import { LayoutPage } from '../pages/layout'
import { ProgressPage } from '../pages/progress'
import { SearchPage } from '../pages/search'

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
      ],
    },
  ])

  return <RouterProvider router={router} />
}
