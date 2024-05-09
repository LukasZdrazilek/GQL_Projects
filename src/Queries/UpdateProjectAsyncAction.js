import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
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