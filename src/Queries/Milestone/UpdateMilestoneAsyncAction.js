import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
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