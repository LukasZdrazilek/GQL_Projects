import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
const mutation =
`
mutation($id: UUID!, $lastchange: DateTime!, $name: String, $amount: Float)
  {
    result: financeUpdate(finance:
      { id: $id, 
        lastchange: $lastchange, 
        name: $name,
        amount: $amount,
        })
   {
    id
    msg
    result: finance
    {
      id
      lastchange
      name
      amount
    }
   }
  }
`

export const RawUpdateFinanceAsyncAction = CreateAsyncActionFromMutation(mutation)
export const ChangedUpdateFinanceAsyncAction = (item) => {
  const changedItem = {...item, amount: Number(item?.amount)}
  return RawUpdateFinanceAsyncAction(changedItem)
}
