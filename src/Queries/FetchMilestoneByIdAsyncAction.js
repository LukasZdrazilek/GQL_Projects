import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) 
{
    result: milestoneById(id: $id) 
    {
      id
      name
      startdate
      enddate
      lastchange
      project
      {
        id
        name
      }
      previous
      {
        name
      }
      nexts
      {
        name
      }
    }
}`
  
  export const FetchMilestoneByIdAsyncAction = CreateAsyncActionFromQuery(query)

  /*
  const query = `query ($id: UUID!) {
    result:milestoneById(id: $id)
  {
    id
    name
    lastchange
    startdate
    enddate
    created
    createdby
    {
      name
    }
  }
}'
  */