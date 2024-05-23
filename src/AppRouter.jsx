import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProjectPage, MilestonePage, FinancePage} from "./Pages";       // + , ProjectPage
import { SearchPage } from "./Pages/SearchPage";
import { ProjectEditPage } from "./Pages/Project/ProjectEditPage.jsx";
import { MilestoneEditPage } from "./Pages/Milestone/MilestoneEditPage.jsx";
import { FinanceEditPage } from "./Pages/Finance/FinanceEditPage.jsx";
import { ProjectsTablePage} from "./Pages/ProjectsTable/ProjectsTablePage.jsx";
import { MilestonesTablePage} from "./Pages/MilestonesTable/MilestonesTablePage.jsx";
import { FinancesTablePage } from "./Pages/FinancesTable/FinancesTablePage.jsx";
import { MilestonesTableEditPage } from "./Pages/MilestonesTable/MilestonesTableEditPage.jsx";
import { ProjectsTableEditPage} from "./Pages/ProjectsTable/ProjectsTableEditPage.jsx";
import { FinancesTableEditPage } from "./Pages/FinancesTable/FinancesTableEditPage.jsx";
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
        path: prefix + "/view",
        element: <ProjectsTablePage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/edit",
        element: <ProjectsTableEditPage />,
        errorElement: <SearchPage />,
    },
    {
      path: prefix + "/project/view/:id",
      element: <ProjectPage />,
      errorElement: <SearchPage />,
    },
    {
      path: prefix + "/project/edit/:id",
      element: <ProjectEditPage />,
      errorElement: <SearchPage />,
    },
    {
        path: prefix + "/project/milestones/:id",
        element: <MilestonesTablePage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/project/milestones/edit/:id",
        element: <MilestonesTableEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/project/finances/:id",
        element: <FinancesTablePage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/project/finances/edit/:id",
        element: <FinancesTableEditPage />,
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