import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
const mutation =
`
mutation($id: UUID!, $lastchange: DateTime!, $name: String, $startdate: DateTime, $enddate: DateTime, previous: $previous, nexts: $nexts)
  {
    result: milestoneUpdate(milestone:{ id: $id, lastchange: $lastchange, name: $name, startdate: $startdate, enddate: $enddate, previous: $previous, nexts: $nexts })
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
        previous
        nexts
      }
    }
  }
`

export const RawUpdateMilestoneAsyncAction = CreateAsyncActionFromMutation(mutation)