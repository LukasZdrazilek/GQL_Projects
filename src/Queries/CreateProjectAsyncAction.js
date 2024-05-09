import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
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