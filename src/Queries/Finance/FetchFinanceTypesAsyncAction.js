import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

// @module Projects
/**
 * FetchFinanceTypesAsyncAction
 *
 * asynchronous action creator function to fetch a list of finance types for the drop down component
 *
 * query fetches up to 100 finance types
 * @function FetchFinanceTypesAsyncAction
 *
 * @returns {Function} Aaction that dispatches the GraphQL query and handles 
 *                     success or error responses
 * @function
 */

const query = `{
    result: financeTypePage(limit: 100)
    {
      __typename
      id
      name
    }
  }`
  
  export const FetchFinanceTypesAsyncAction = CreateAsyncActionFromQuery(query)
