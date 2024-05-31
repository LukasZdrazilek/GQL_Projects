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
      id 
        lastchange
        name
        startdate
        enddate
        created
        group
        {
          id
          name
        }
        finances
        {
          id
          name
          amount
          financeType
          {
            id
            name
          }
          project
          {
          id
          name
          }
        }
        milestones
        {
          id
          name
          startdate
          enddate
          lastchange
          project
          {
            id
            name
            milestones {
            id
            name
            startdate
            enddate
            }
          }
          previous
          {
            id
            name
          }
          nexts
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
      }
  }`

export const FetchProjectsAsyncAction = CreateAsyncActionFromQuery(query)
