import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: projectById(id: $id) {
          __typename
          id 
          lastchange
          name

      }
  }`
  
  export const FetchProjectByIdAsyncAction = CreateAsyncActionFromQuery(query)