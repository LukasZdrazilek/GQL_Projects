import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GroupPage, UserPage, ProjectsPage} from "./Pages";       // + , ProjectsPage
import { SearchPage } from "./Pages/SearchPage";
import { ProjectsEditPage } from "./Pages/ProjectsEditPage";
// import { UserPage, GroupPage } from "./Pages";

export const Routes = [
    {
        path: "/",
        errorElement: <SearchPage />,
        element: <SearchPage />
    },
    {
        path: "/user/:id",
        element: <UserPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/group/:id",
        element: <GroupPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/search",
        element: <SearchPage />,
        errorElement: <SearchPage />,
    },
    {
      path: "/search/:phrase",
      element: <SearchPage />,
      errorElement: <SearchPage />,
    },    
    {
      path: "/project/view/:id",
      element: <ProjectsPage />,
      errorElement: <SearchPage />,
    },
    {
      path: "/project/edit/:id",
      element: <ProjectsEditPage />,
      errorElement: <SearchPage />,
    }
    
]

const router = createBrowserRouter(Routes, {basename: "/ug"});    // projects pak
// const router = createBrowserRouter(Routes);

export const AppRouter = () => <RouterProvider router={router} />