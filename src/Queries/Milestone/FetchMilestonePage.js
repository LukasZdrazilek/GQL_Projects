import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `{
    milestonePage {
      id
      name
    }
  }`
  
  export const FetchMilestonePage = CreateAsyncActionFromQuery(query)