import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: projectById(id: $id) {
        __typename
        id 
        lastchange
        name
        startdate
        enddate
        created
        team
        {
          id
          name
        }
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
        }
        milestones
        {
          id
          name
          startdate
          enddate
        }
        projectType
        {
          id
          name
        }
      }
  }`
  
  export const FetchProjectByIdAsyncAction = CreateAsyncActionFromQuery(query)