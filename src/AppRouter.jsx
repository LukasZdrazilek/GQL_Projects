import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProjectsPage, MilestonePage, FinancePage} from "./Pages";       // + , ProjectsPage
import { SearchPage } from "./Pages/SearchPage";
import { ProjectsEditPage } from "./Pages/ProjectsEditPage";
import { MilestoneEditPage } from "./Pages/MilestoneEditPage";   
import { FinanceEditPage } from "./Pages/FinanceEditPage";
import { ProjectsCreatePage} from "./Pages/ProjectsCreatePage.jsx";
import { MilestoneCreatePage} from "./Pages/MilestoneCreatePage.jsx";
import { FinanceCreatePage } from "./Pages/FinanceCreatePage";
import { ProjectsViewPage} from "./Pages/ProjectsViewPage.jsx";
// import { UserPage, GroupPage } from "./Pages";

const prefix = "/projects"
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
      path: prefix + "/search/:phrase",
      element: <SearchPage />,
      errorElement: <SearchPage />,
    },
    {
      path: prefix + "/project/create",
      element: <ProjectsCreatePage />,
      errorElement: <SearchPage />
    },
    {
        path: prefix + "/project/view",
        element: <ProjectsViewPage />,
        errorElement: <SearchPage />,
    },
    {
      path: prefix + "/project/view/:id",
      element: <ProjectsPage />,
      errorElement: <SearchPage />,
    },
    {
      path: prefix + "/project/edit/:id",
      element: <ProjectsEditPage />,
      errorElement: <SearchPage />,
    },
    {
      path: prefix + "/milestone/create",
      element: <MilestoneCreatePage />,
      errorElement: <SearchPage />,
    },
    {
      path: prefix + "/milestone/view/:id",
      element: <MilestonePage />,
      errorElement: <SearchPage />,
    },
    {
      path: prefix + "/milestone/edit/:id",
      element: <MilestoneEditPage />,
      errorElement: <SearchPage />,
    },
    {
      path: prefix + "/finance/create",
      element: <FinanceCreatePage />,
      errorElement: <SearchPage />,
    },
    {
      path: prefix + "/finance/view/:id",
      element: <FinancePage />,
      errorElement: <SearchPage />,
    },
    {
      path: prefix + "/finance/edit/:id",
      element: <FinanceEditPage />,
      errorElement: <SearchPage />,
    }

    
]

//const router = createBrowserRouter(Routes, {basename: "/projects"});
const router = createBrowserRouter(Routes);

export const AppRouter = () => <RouterProvider router={router} />