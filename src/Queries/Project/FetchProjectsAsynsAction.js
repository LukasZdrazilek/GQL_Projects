import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

/**
 * FetchProjectsAsyncAction
 *
 *  asynchronous action function to fetch a list of projects.
 *
 * This action dispatches a  query (`projectPage`) to retrieve a list of all projects
 * @function FetchProjectsAsyncAction
 * @returns {Function}  action that dispatches the query and handles success or error responses.
 *                 
 */

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
