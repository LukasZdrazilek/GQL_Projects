import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchProjectByIdAsyncAction } from "../../Queries/Project/FetchProjectByIdAsyncAction.js"
import { MilestonesTableLargeCard } from "../../Components/MilestonesTable/MilestonesTableLargeCard.jsx";
import { MilestonesTableCard } from "../../Components/MilestonesTable/MilestonesTableCard.jsx";

// @module Projects
/**
 * MilestonesTablePage Component
 *
 * This component is responsible for:
 * - Retrieving milestones belonging to the project and showing them in a sortable table
 *
 * @component
 * @function
 */

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst milníky", success: "Načtení milníků se povedlo"})
export const MilestonesTablePage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [projects, userPromise] = useFreshItem({id}, FetchProjectByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (projects) {
        return (

            <MilestonesTableLargeCard project={projects}>
                <MilestonesTableCard project={projects} />
            </MilestonesTableLargeCard>
        )
    } else {
        return (
            <div>Nahrávám projekty...</div>
        )
    }

}
