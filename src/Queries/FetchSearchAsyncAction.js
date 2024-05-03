import { CreateFetchQuery, ItemActions } from "@hrbolek/uoisfrontend-shared/src"

const query = `query($phrase: String!) {
    result: userPage(where: {fullname: {_ilike: $phrase}}) {
      __typename
      id
      name
      surname
      fullname
      email
    }
    
    resultg: groupPage(where: {name: {_ilike: $phrase}}) {
      __typename
      id
      name
      grouptype {
        id
        name
      }
    }
    resultp: projectPage(where: {name: {_ilike: $phrase}}) {
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

  

export const FetchSearchAsyncAction = ({str}) => {
    return async (dispatch) => {
        const json = await CreateFetchQuery(query)({phrase: `%${str}%`})   

        const data = json?.data
        if (data) {
            const {result, resultg, resultp} = data
            const resultall = [...result, ...resultg, ...resultp]
            for(const item of resultall) {
                dispatch(ItemActions.item_update(item))
            }

            return {data: {...data, resultall: resultall}}
        } else {
            return {data: {...data, resultall: []}}
        }
    }
}