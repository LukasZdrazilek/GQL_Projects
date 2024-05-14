import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `{
    result: projectPage
    {
      __typename
      id
      name
      lastchange
      startdate
      enddate
      milestones
      {
        id
        name
      }
      finances
      {
        id
        amount
        financeType
        {
          id
          name
        }
      }
      projectType
      {
        id
        name
      }
      group
      {
        id
        name
      }
    }
  }`

export const FetchProjectsAsyncAction = CreateAsyncActionFromQuery(query)