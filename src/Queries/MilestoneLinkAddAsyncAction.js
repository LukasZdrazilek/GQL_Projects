import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
const mutation =
    `
mutation($previousId: UUID, $nextId: UUID)
{
  result: milestonesLinkAdd(link:
  {
    previousId: $previousId,
    nextId: $nextId,
  })
  {
    msg
    id
    result: milestone
    {
      id
      name
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
      project
      {
        id
      }
    }
  }
}
`

export const MilestoneLinkAddAsyncAction = CreateAsyncActionFromMutation(mutation)