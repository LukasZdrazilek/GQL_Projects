import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) 
{
    result: financeById(id: $id) 
    {
      id
      name
      lastchange
      amount
      project
      {
        id
        name
        finances
        {
        id
          name
          amount
          financeType
          {
            id
            name
          }
          project
          {
            id
            name
          }
        }
      }
      financeType
      {
        id
        name
      }
    }
}`
  
  export const FetchFinanceByIdAsyncAction = CreateAsyncActionFromQuery(query)