import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `{
    result: groupPage(limit: 100)
    {
      __typename
      id
      name
    }
  }`

export const FetchGroupsAsyncAction = CreateAsyncActionFromQuery(query)