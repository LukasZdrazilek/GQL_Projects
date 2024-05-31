import { useParams } from "react-router-dom"
import { UserLargeCard } from "../../Components/index.js"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchMilestoneByIdAsyncAction } from "../../Queries/Milestone/FetchMilestoneByIdAsyncAction.js"
import { MilestoneLargeCard } from "../../Components/Milestone/MilestoneLargeCard.jsx"
import { MilestoneEditCard } from "../../Components/Milestone/MilestoneEditCard.jsx"

// @module Projects
/**
 * MilestoneEditPage Component
 *
 * This component is responsible for:
 * - Retrieving milestone data using the `FetchMilestonesByIdAsyncAction` based on the milestone ID extracted from the URL.
 * - Showing basic information via MilestoneLargeCard
 * - A loading message while the milestone data is being fetched.
 * - A success or error message upon completion of the data fetching operation.
 * - `MilestoneEditCard` is embedded within the `MilestoneLargeCard` to allow users to edit the attributes
 *
 * @component
 * @function
 */

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst milestone", success: "Načtení milestone se povedlo"})
export const MilestoneEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [milestone, userPromise] = useFreshItem({id}, FetchMilestoneByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (milestone) {
        return (

            <MilestoneLargeCard milestone={milestone}>
                <MilestoneEditCard milestone={milestone} />
            </MilestoneLargeCard>
        )
    } else {
        return (
            <div>Nahrávám milestone...</div>
        )
    }
    
}
