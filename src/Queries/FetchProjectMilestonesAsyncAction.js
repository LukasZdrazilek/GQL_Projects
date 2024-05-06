import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: projectById(id: $id) {
        id 
        name
        milestones
        {
          id
          name
        }
      }
  }`

export const FetchProjectMilestonesAsyncAction = CreateAsyncActionFromQuery(query)