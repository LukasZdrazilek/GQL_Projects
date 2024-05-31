import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation =
    `
mutation($previousId: UUID!, $nextId: UUID!)
{
  result: milestonesLinkAdd(link:
    {
      previousId: $previousId, nextId: $nextId
    })
  {
    id
    msg
    result: milestone
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
        milestones
        {
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
  }
}
`

export const MilestoneLinkAddAsyncAction = CreateAsyncActionFromMutation(mutation)
