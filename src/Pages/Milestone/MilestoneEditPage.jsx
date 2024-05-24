// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../../Components/index.js"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchMilestoneByIdAsyncAction } from "../../Queries/Milestone/FetchMilestoneByIdAsyncAction.js"
import { MilestoneLargeCard } from "../../Components/Milestone/MilestoneLargeCard.jsx"
import { MilestoneEditCard } from "../../Components/Milestone/MilestoneEditCard.jsx"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst milestone", success: "Načtení milestone se povedlo"})
export const MilestoneEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [milestone, userPromise] = useFreshItem({id}, FetchMilestoneByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (milestone) {             //      43dd2ff1-5c17-42a5-ba36-8b30e2a243bb            Project ID
        return (
            // // <UserLargeCard user={user} />           // ProjectLargeCard?
            // <div>
            //     Projekty nahrány
            //     {JSON.stringify(projects)}       // debug informace
            // </div>

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