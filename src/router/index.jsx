import {useRoutes } from "react-router-dom"
import { adminPages, routes, userPages } from "./routes";
import { useState } from "react";


const Router = () => {
  const [role] = useState('user'); //guest || user || admin

  const handleRoles = () => {
    // if(role === 'admin') { return [...routes, ...adminPages]}
    if(role === 'user') {
        return [...routes, ...userPages]
    }
    return [...routes, ...adminPages(role)];
  }


  const router = useRoutes(handleRoles());

  return router;

  // return (
  //   <Routes>
  //     <Route index element={<HomePage/>} />
  //     <Route path={PATHS.ABOUT} element={<AboutPage />} />
  //     <Route path={PATHS.POSTS.ROOT} element={<Outlet />}>
  //       <Route index element={<PostsPage />} />
  //       <Route path={PATHS.POSTS.VIEW} element={< PostPag />} />
  //       <Route path={PATHS.POSTS.EDIT} element={< PostPageEdit />} />
  //       <Route path={PATHS.POSTS.CREATE} element={< PostPageCreate />} />
  //     </Route>

  //     <Route
  //       path={PATHS.ERRORS.NOT_FOUND}
  //       element={<h1>Page not found 404</h1>}
  //     />

  //     <Route
  //       path='*'
  //       element={<Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />}
  //     />
    
  //   </Routes>

  // )
}

export default Router






