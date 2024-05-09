  import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `{
    result: projectTypePage(limit: 100)
    {
      __typename
      id
      name
    }
  }`
  
  export const FetchProjectTypesAsyncAction = CreateAsyncActionFromQuery(query)