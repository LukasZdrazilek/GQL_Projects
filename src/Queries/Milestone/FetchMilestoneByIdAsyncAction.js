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
        milestones {
        id
        name
        startdate
        enddate
        }
      }
      previous
      {
        id
        name
      }
      nexts
      {
        id
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