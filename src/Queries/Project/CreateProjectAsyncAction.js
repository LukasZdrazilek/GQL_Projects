import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

/**
 * CreateProjectAsyncAction
 *
 *  asynchronous action function for creating a new project.
 *
 * `projectInsert` creates a new project associated with the
 * specified project type and returns the result message
 *
 * @function CreateProjectAsyncAction
 *
 * @param {Object} data - data object
 * @param {string} data.projectType_id - UUID of the project type
 * @param {string} data.name - name of the new project
 *
 * @returns {Function} asynchronous action that dispatches the query
 *                     and handles success or error responses.

 */

const mutation =
    `
mutation($projectType_id: UUID!, $name: String!) {
  result: projectInsert(project: {
    projecttypeId: $projectType_id,
    name: $name
  }) {
    id
    msg
    result: project {
      projectType
      {
        id
      }
      name
    }
  }
}
`

export const CreateProjectAsyncAction = CreateAsyncActionFromMutation(mutation)
