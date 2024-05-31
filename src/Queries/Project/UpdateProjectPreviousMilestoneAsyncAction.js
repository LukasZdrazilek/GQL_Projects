import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

// @module Projects
/**
 * RawUpdateProjectAsyncAction
 *
 * Aasynchronous action function for updating a project's details.
 *
 * Used with edit components, through (`projectUpdate`)
 *
 * @function RawUpdateProjectAsyncAction
 *
 * @param {Object} data - input data
 * @param {string} data.id - mandatory project id
 * @param {string} data.lastchange -  DateTime string required for verification
 * @param {string} [data.name] - changed name
 * @param {string} [data.startdate] - changed start date
 * @param {string} [data.enddate] - changed end date
 * @param {string} [data.projectType_id] - changed type
 *
 * @returns {Function} action that dispatches the mutation and handles success or error response
 * @function
 */

const mutation =
    `
mutation($id: UUID!, $lastchange: DateTime!, $name: String, 
  $startdate: DateTime, $enddate: DateTime, $projectType_id: UUID)
{
  result: projectUpdate(project: 
  {	id: $id,
    lastchange: $lastchange,
    name: $name,
  	startdate: $startdate,
  	enddate: $enddate,
  	projecttypeId: $projectType_id })
  {
    id
    msg
    result: project
    {
      id
      lastchange
      milestones
      {
      
    }
  }
}
`

export const RawUpdateProjectAsyncAction = CreateAsyncActionFromMutation(mutation)
