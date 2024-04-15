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
        }
        milestones
        {
          id
          name
        }
    
        projectType
        {
          id
          name
        }

      }
  }`
  
  export const FetchFinanceByIdAsyncAction = CreateAsyncActionFromQuery(query)

  /*
  const query = `query ($id: UUID!) {
    result:financeById(id: &id)
    {
      id
      name
      lastchange
      amount
      financeType
      {
        name
        nameEn
      }
      created
      createdby
      {
        name
      }
  }
}`
  */