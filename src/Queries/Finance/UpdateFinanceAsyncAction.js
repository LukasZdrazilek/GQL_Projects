import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

/**
 * RawUpdateFinanceAsyncAction
 *
 * asynchronous action creator function for updating the finance object
 * intended for direct use with FinanceEditCard
 *
 * Th the input data must include:
 *   - finance ID 
 *   - finance's last change timestam
 *   - attributes to update:
 *
 * @function RawUpdateFinanceAsyncAction
 *
 * @param {Object} data - input data .
 * @param {string} data.id - UUID of the finance
 * @param {string} data.lastchange - DateTime string of last change
 * @param {string} [data.name] -  new name 
 * @param {number} [data.amount] - new amount
 *
 * @returns {Function}  action that dispatches the query
 */

/**
 * ChangedUpdateFinanceAsyncAction
 *
 * asynchronous action creator function for updating the finance object
 * intended for direct use with FinanceEditCard, 
 * includes data conversion to correctly update finance.amount 
 *
 * Th the input data must include:
 *   - finance ID 
 *   - finance's last change timestam
 *   - attributes to update:
 *
 * @function RawUpdateFinanceAsyncAction
 *
 * @param {Object} data - input data .
 * @param {string} data.id - UUID of the finance
 * @param {string} data.lastchange - DateTime string of last change
 * @param {string} [data.name] -  new name 
 * @param {number} [data.amount] - new amount
 *
 * @returns {Function}  action that dispatches the query
 */

const mutation =
`
mutation($id: UUID!, $lastchange: DateTime!, $name: String, $amount: Float)
  {
    result: financeUpdate(finance:
      { id: $id, 
        lastchange: $lastchange, 
        name: $name,
        amount: $amount,
        })
   {
    id
    msg
    result: finance
    {
      id
      lastchange
      name
      amount
    }
   }
  }
`

export const RawUpdateFinanceAsyncAction = CreateAsyncActionFromMutation(mutation)
export const ChangedUpdateFinanceAsyncAction = (item) => {
  const changedItem = {...item, amount: Number(item?.amount)}
  return RawUpdateFinanceAsyncAction(changedItem)
}
