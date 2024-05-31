import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

// @module Projects
/**
 * FetchProjectByIdAsyncAction
 *
 * asynchronous action creator function to fetch a project's details by its ID
 *
 * This action dispatches a GraphQL query (`projectById`) to retrieve comprehensive information
 * about a specific project
 *
 * @function FetchProjectByIdAsyncAction
 *
 * @param {Object} params - data.object 
 * @param {string} params.id - UUID of the project 
 *
 * @returns {Function} action that dispatches query and handles success or error responses
 *                     action will contain the fetched project data in the `data.result` 
 * @function
 */

const query = `query ($id: UUID!) {
    result: projectById(id: $id) {
        __typename
        id 
        lastchange
        name
        startdate
        enddate
        created
        group
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
          project
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
        projectType
        {
          id
          name
        }
      }
  }`
  
  export const FetchProjectByIdAsyncAction = CreateAsyncActionFromQuery(query)
