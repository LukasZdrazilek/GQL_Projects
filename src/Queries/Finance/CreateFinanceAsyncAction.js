import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

// @module Projects
/**
 * CreateFinanceAsyncAction
 *
 * asynchronous action creator function for creating a new finance object
 *
 * `financeInsert` creates a new finance associated with the
 * specified project and finance type, and returns the details of new object as message
 *
 * @function CreateFinanceAsyncAction
 *
 * @param {Object} data -  data object 
 * @param {string} data.project_id - UUID of the project
 * @param {string} data.name - name of the new finance object
 * @param {string} data.financeType_id - UUID of the finance type for the new finance
 *
 * @returns {Function} A Redux-Thunk asynchronous action that dispatches the GraphQL mutation
 *                     and handles success or error responses.
 * @function
 */

const mutation =
    `
mutation($project_id: UUID!, $name: String!, $financeType_id: UUID!) {
  result: financeInsert(finance: {
    projectId: $project_id,
    name: $name,
    financetypeId: $financeType_id
  }) {
    id
    msg
    result: finance {
      name
      financeType {
        id
      }
      project
      {
        id
      }
    }
  }
}
`

export const CreateFinanceAsyncAction = CreateAsyncActionFromMutation(mutation)
