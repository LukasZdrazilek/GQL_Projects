import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query($id: UUID!)
{
  result: milestoneById(id: $id)
  {
    project
    {
      milestones
      {
        id
        name
      }
    }
  }
}
`

export const FetchProjectMilestonesAsyncAction = CreateAsyncActionFromQuery(query)
