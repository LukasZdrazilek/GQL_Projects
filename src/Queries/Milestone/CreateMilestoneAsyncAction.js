import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

/**
 * CreateMilestoneAsyncAction
 *
 * asynchronous action creator function for creating a new milestone.
 *
 * It takes an object containing `project_id` to which milestone shall belong 
 * and `name` of new milestone as input data.
 *
 * The query (`milestoneInsert`) creates a new milestone associated with the
 * specified project and returns the ID, message (`msg`), and details of the created milestone.
 *
 * @function CreateMilestoneAsyncAction
 *
 * @param {Object} data - data object containing:
 * @param {string} data.project_id -  UUID of the project
 * @param {string} data.name - name for new milestone
 *
 * @returns {Function} asynchronous action that dispatches the GraphQL mutation
 *                     and handles success or error responses.
 */

const mutation =
    `
mutation($project_id: UUID!, $name: String!)
{
  result: milestoneInsert(milestone:
  {
    projectId: $project_id,
    name: $name
  })
  {
    id
    msg
    result: milestone
    {
      id
      lastchange
      name
      startdate
      enddate
      project
      {
        id
      }
    }
  }
}
`

export const CreateMilestoneAsyncAction = CreateAsyncActionFromMutation(mutation)
