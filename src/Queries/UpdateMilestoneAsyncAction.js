import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
const mutation =
`
mutation($id: UUID!, $lastchange: DateTime!, $name: String, $startdate: DateTime, $enddate: DateTime)
  {
    result: projectUpdate(project:{ id: $id, lastchange: $lastchange, name: $name, startdate: $startdate, enddate: $enddate })
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
      }
    }
  }
`

export const UpdateMilestoneAsyncAction = CreateAsyncActionFromMutation(mutation)