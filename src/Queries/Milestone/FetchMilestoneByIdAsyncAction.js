import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

/**
 * FetchMilestoneByIdAsyncAction
 *
 * asynchronous action creator function to fetch a milestone by its ID.
 * query to retrieve detailed information about a specific milestone,
 * including its associated project, previous milestones, and next milestones.
 *
 * @function FetchMilestoneByIdAsyncAction
 *
 * @param {Object} params - parameters object 
 * @param {string} params.id - The UUID of the milestone to fetch.
 *
 * @returns {Function} action that dispatches the GraphQL query and handles success or error responses.
 */

const query = `query ($id: UUID!) 
{
    result: milestoneById(id: $id) 
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
}`
  
  export const FetchMilestoneByIdAsyncAction = CreateAsyncActionFromQuery(query)

  /*
  const query = `query ($id: UUID!) {
    result:milestoneById(id: $id)
  {
    id
    name
    lastchange
    startdate
    enddate
    created
    createdby
    {
      name
    }
  }
}'
  */
