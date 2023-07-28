import { Navigate, Outlet } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import { PATHS } from "./paths";
import PostsPage from "../pages/PostsPage";
import PostPage from "../pages/PostPage";
import PostPageEdit from "../pages/PostPageEdit";
import PostPageCreate from "../pages/PostPageCreate";
import AdminGurd from "../components/AdminGurd";


const adminPages = (role) => [
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGurd role={role} />,
    children: [
      {
        index: true,
        element: <h1>Admin</h1>
      },
      {
        path: PATHS.ADMIN.USERS,
        element: <h1>Users</h1>
      },
    ]
  }
]

// const adminPages = [
//   {
//     path: PATHS.ADMIN.ROOT,
//     element: <Outlet />,
//     children: [
//       {
//         index: true,
//         element: <h1>Admin</h1>
//       },
//       {
//         path: PATHS.ADMIN.USERS,
//         element: <h1>Users</h1>
//       },
//     ]
//   }
// ]

const userPages = [
  {
    path: PATHS.POSTS.ROOT,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <PostsPage/>,
      },
      {
        path: PATHS.POSTS.VIEW,
        element: < PostPage />,
      },
      {
        path: PATHS.POSTS.EDIT,
        element: < PostPageEdit />,
      },
      {
        path: PATHS.POSTS.CREATE,
        element: <PostPageCreate />
      },
    ]
  },
]; 


const routes = [
  {
    index: true,
    element: <HomePage/>,
  },
  {
    path: PATHS.ABOUT,
    element: <AboutPage />
  },
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <h1>Page not found 404</h1>
  },
  {
    path:'*',
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
]

export { adminPages, userPages, routes};