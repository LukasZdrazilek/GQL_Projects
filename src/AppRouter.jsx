import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProjectsPage, MilestonePage, FinancePage} from "./Pages";       // + , ProjectsPage
import { SearchPage } from "./Pages/SearchPage";
import { ProjectsEditPage } from "./Pages/ProjectsEditPage";
import { MilestoneEditPage } from "./Pages/MilestoneEditPage";   
import { FinanceEditPage } from "./Pages/FinanceEditPage";
// import { UserPage, GroupPage } from "./Pages";

export const Routes = [
    {
        path: "/",
        errorElement: <SearchPage />,
        element: <SearchPage />
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
    },
    {
      path: "/milestone/view/:id",
      element: <MilestonePage />,
      errorElement: <SearchPage />,
    },
    {
      path: "/milestone/edit/:id",
      element: <MilestoneEditPage />,
      errorElement: <SearchPage />,
    },
    {
      path: "/finance/view/:id",
      element: <FinancePage />,
      errorElement: <SearchPage />,
    },
    {
      path: "/finance/edit/:id",
      element: <FinanceEditPage />,
      errorElement: <SearchPage />,
    }

    
]

const router = createBrowserRouter(Routes, {basename: "/projects"});
// const router = createBrowserRouter(Routes);

export const AppRouter = () => <RouterProvider router={router} />