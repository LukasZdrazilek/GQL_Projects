// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchFinanceByIdAsyncAction } from "../../Queries/Finance/FetchFinanceByIdAsyncAction.js"
import { FinanceLargeCard } from "../../Components/Finance/FinanceLargeCard.jsx"
import { FinanceEditCard } from "../../Components/Finance/FinanceEditCard.jsx"

// @module Projects
/**
 * FinanceEditPage Component
 *
 * This component is responsible for:
 * - Retrieving finance data using the `FetchFinanceByIdAsyncAction` based on the finance ID extracted from the URL.
 * - Showing basic information via FinanceLargeCard
 * - A loading message while the finance data is being fetched.
 * - A success or error message upon completion of the data fetching operation.
 * - `FinanceEditCard` is embedded within the `FinanceLargeCard` to allow users to edit the attributes
 *
 * @component
 * @function
 */

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst finance", success: "Načtení financí se povedlo"})
export const FinanceEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [finance, userPromise] = useFreshItem({id}, FetchFinanceByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (finance) {             //      43dd2ff1-5c17-42a5-ba36-8b30e2a243bb            Project ID
        return (
            // // <UserLargeCard user={user} />           // ProjectLargeCard?
            // <div>
            //     Projekty nahrány
            //     {JSON.stringify(projects)}       // debug informace
            // </div>

            <FinanceLargeCard finance={finance}>
                <FinanceEditCard finance={finance} />
            </FinanceLargeCard>
        )
    } else {
        return (
            <div>Nahrávám finance...</div>
        )
    }
    
}
