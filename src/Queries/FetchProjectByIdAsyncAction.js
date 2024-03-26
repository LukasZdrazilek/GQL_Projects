import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: projectById(id: $id) {
      __typename
      id
      name
      valid
      email
      lastchange
      
      grouptype {
        id
        name
      }
      
      mastergroup {
        __typename
        id
        name
        email
        lastchange
      }
      
      subgroups {
        __typename
        id
        name
        valid
        email
        lastchange
        
        grouptype {
          id
          name
        }
      }
      
      roles {
        id
        valid
        roletype {
          id
          name
        }
        user {
          id
          fullname
          email
        }
      }
  
      memberships {
        id
        valid
        user {
          id
          fullname
          email
        }
      }
      
    }
  }`
  
  export const FetchProjectByIdAsyncAction = CreateAsyncActionFromQuery(query)