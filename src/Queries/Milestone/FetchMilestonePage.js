import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

/**
 * FetchMilestonePage
 *
 * asynchronous action creator function to fetch the list of milestones.
 * query to retrieve a page of milestone IDs and names
 *
 * @function FetchMilestonePage
 *
 * @returns {Function} action that dispatches the GraphQL query and handles 
 *                     success or error responses.
 *
 */

const query = `{
    milestonePage {
      id
      name
    }
  }`
  
  export const FetchMilestonePage = CreateAsyncActionFromQuery(query)
