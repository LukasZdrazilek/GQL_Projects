import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

/**
 * RawUpdateMilestoneAsyncAction
 *
 *  asynchronous action creator function to update a milestone.
 * 
 * This action is intended to interact  with editable components in the MilestoneEditCard
 * It dispatches a GraphQL mutation to update a milestone's name, start date, or end date.
 *
 * mandatory data:
 *   - The milestone's ID (`id`)
 *   - The milestone's last change timestamp (`lastchange`)
 *   - The attributes to update: (`name`, `startdate`, `enddate`)
 *
 * @function RawUpdateMilestoneAsyncAction
 *
 * @param {Object} data - input data
 * @param {string} data.id -  UUID of the milestone 
 * @param {string} data.lastchange -  DateTime string of last strange
 *
 * @returns {Function} action that dispatches the GraphQL mutation 
 *                     and handles success or error responses.
 */

const mutation =
`
mutation($id: UUID!, $lastchange: DateTime!, $name: String, $startdate: DateTime, $enddate: DateTime,)
  {
    result: milestoneUpdate(milestone:{ id: $id, lastchange: $lastchange, name: $name, startdate: $startdate, enddate: $enddate })
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
      }
    }
  }
`

export const RawUpdateMilestoneAsyncAction = CreateAsyncActionFromMutation(mutation)
