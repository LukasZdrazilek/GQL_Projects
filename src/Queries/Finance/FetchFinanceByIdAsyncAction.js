import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

/**
 * FetchFinanceByIdAsyncAction
 *
 *  asynchronous action function to fetch a finance by its ID.
 * @function FetchFinanceByIdAsyncAction
 *
 * @param {Object} params - object with data
 * @param {string} params.id - uuid to be fetched
 *
 * @returns {Function} action that dispatches the query and handles success or error response
*/

const query = `query ($id: UUID!) 
{
    result: financeById(id: $id) 
    {
      id
      name
      lastchange
      amount
      project
      {
        id
        name
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
      }
      financeType
      {
        id
        name
      }
    }
}`
  
  export const FetchFinanceByIdAsyncAction = CreateAsyncActionFromQuery(query)
