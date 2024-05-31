import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

/**
 * FetchProjectMilestonesAsyncAction
 *
 *  asynchronous action function to fetch a project's milestones.
 *
 * This action is specifically designed to retrieve a list of milestones associated with a
 * given project, just the Ids of those
 *
 * @function FetchProjectMilestonesAsyncAction
 *
 * @param {Object} params - An object containing the query parameters.
 * @param {string} params.id - The UUID of the project to fetch milestones for.
 *
 * @returns {Function} ň action that dispatches the query and handles 
 *                     success or error responses.
 */

const query = `query($id: UUID!)
{
  result: projectById(id: $id)
  {
      milestones
      {
        id
      name
      startdate
      enddate
      lastchange
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
  }
}
`

export const FetchProjectMilestonesAsyncAction = CreateAsyncActionFromQuery(query)
