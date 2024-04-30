import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `{
    result: financeTypePage(limit: 100)
    {
      __typename
      id
      name
    }
  }`
  
  export const FetchFinanceTypesAsyncAction = CreateAsyncActionFromQuery(query)