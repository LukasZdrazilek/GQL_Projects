import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
const mutation =
`
mutation($id: UUID!, $lastchange: DateTime!, $name: String, $amount: Number, $project_id: UUID, $financeType_id: UUID)
  {
    result: financeUpdate(finance:{ id: $id, lastchange: $lastchange, name: $name, amount: $amount, 
      projectId: $project_id, financetypeId: $financeType_id})
    {
      id
      name
      lastchange
      amount
      project
      {
        id
        name
      }
      financeType
      {
        id
        name
      }
    }
  }
`

export const UpdateFinanceAsyncAction = CreateAsyncActionFromMutation(mutation)