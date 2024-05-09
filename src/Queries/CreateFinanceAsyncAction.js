import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
const mutation =
    `
mutation($project_id: UUID!, $name: String!, $financeType_id: UUID!) {
  result: financeInsert(finance: {
    projectId: $project_id,
    name: $name,
    financetypeId: $financeType_id
  }) {
    id
    msg
    result: finance {
      name
      financeType {
        id
      }
      project
      {
        id
      }
    }
  }
}
`

export const CreateFinanceAsyncAction = CreateAsyncActionFromMutation(mutation)