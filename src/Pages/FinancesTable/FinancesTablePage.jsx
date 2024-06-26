import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchProjectByIdAsyncAction } from "../../Queries/Project/FetchProjectByIdAsyncAction.js"
import { FinancesTableLargeCard } from "../../Components/FinancesTable/FinancesTableLargeCard.jsx"
import { FinancesTableCard } from "../../Components/FinancesTable/FinancesTableCard.jsx"

// @module Projects
/**
 * FinancesTablePage Component
 *
 * This component is responsible for:
 * - Retrieving finances belonging to the project and showing them in a sortable table
 *
 * @component
 * @function
 */

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst milníky", success: "Načtení milníků se povedlo"})
export const FinancesTablePage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [projects, userPromise] = useFreshItem({id}, FetchProjectByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (projects) {             //      43dd2ff1-5c17-42a5-ba36-8b30e2a243bb            Project ID
        return (

            <FinancesTableLargeCard project={projects}>
                <FinancesTableCard project={projects} />
            </FinancesTableLargeCard>
        )
    } else {
        return (
            <div>Nahrávám projekty...</div>
        )
    }

}
