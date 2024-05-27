import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

/**
 * RawUpdateProjectAsyncAction
 *
 * asynchronous action function for updating a project's details.
 *
 * This action is intended for direct use with editable components
 *
 * @function RawUpdateProjectAsyncAction
 *
 * @param {Object} data - input data for the mutation
 * @param {string} data.id - UUID of the project to update
 * @param {string} data.lastchange - DateTime string of last change
 * @param {string} [data.name] -  name 
 * @param {string} [data.startdate] - new start date 
 * @param {string} [data.enddate] -  new end date 
 * @param {string} [data.projectType_id] -  new project type 
 * @param {string} [data.group_id] - new project group ID 
 *
 * @returns {Function}  action that dispatches the mutation and handles success or error responses.
 */

const mutation =
`
mutation($id: UUID!, $lastchange: DateTime!, $name: String, $startdate: DateTime, $enddate: DateTime, $projectType_id: UUID, $group_id: UUID)
{
  result: projectUpdate(project: 
  {
    id: $id,
    lastchange: $lastchange,
    name: $name,
    startdate: $startdate,
    enddate: $enddate,
    projecttypeId: $projectType_id,
    groupId: $group_id})
  {
    id
    msg
    result: project
    {
      id
      lastchange
      name
      startdate
      enddate
      projectType
      {
        id
        name
      }
      group {
        id
        name
      }
    }
  }
}
`

export const RawUpdateProjectAsyncAction = CreateAsyncActionFromMutation(mutation)
