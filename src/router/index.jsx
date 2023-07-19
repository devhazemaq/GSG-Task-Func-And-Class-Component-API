import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import { PATHS } from "./paths"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import PostsPage from "../pages/PostsPage"
import PostPag from "../pages/PostPage"
import PostPageEdit from "../pages/PostPageEdit"
import PostPageCreate from "../pages/PostPageCreate"

const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path={PATHS.ABOUT} element={<AboutPage />} />
      <Route path={PATHS.POSTS.ROOT} element={<Outlet />}>
        <Route index element={<PostsPage />} />
        <Route path={PATHS.POSTS.VIEW} element={< PostPag />} />
        <Route path={PATHS.POSTS.EDIT} element={< PostPageEdit />} />
        <Route path={PATHS.POSTS.CREATE} element={< PostPageCreate />} />
      </Route>

      <Route
        path={PATHS.ERRORS.NOT_FOUND}
        element={<h1>Page not found 404</h1>}
      />

      <Route
        path='*'
        element={<Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />}
      />
    
    </Routes>

  )
}

export default Router