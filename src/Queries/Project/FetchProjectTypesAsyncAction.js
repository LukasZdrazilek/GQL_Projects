  import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

  // @module Projects
/**
 * FetchProjectTypesAsyncAction
 *
 * asynchronous action function to fetch a list of project types
 *
 * This action dispatches query (`projectTypePage`) to retrieve a  list of
 * project types.
 *
 * @function FetchProjectTypesAsyncAction
 *
 * @returns {Function} action that dispatches the query and handles 
 *                     success or error responses. The action payload will contain the 
 *                     fetched project types in the `data.result` property upon success.
 * @function
 */

const query = `{
    result: projectTypePage(limit: 100)
    {
      __typename
      id
      name
    }
  }`
  
  export const FetchProjectTypesAsyncAction = CreateAsyncActionFromQuery(query)
