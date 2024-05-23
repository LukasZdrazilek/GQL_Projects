import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
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