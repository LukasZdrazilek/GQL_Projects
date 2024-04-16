// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchMilestoneByIdAsyncAction } from "../Queries/FetchMilestoneByIdAsyncAction"
import { MilestoneLargeCard } from "../Components/Milestone/MilestoneLargeCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst milestone", success: "Načtení milestonu se povedlo"})
export const MilestonePage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [milestone, userPromise] = useFreshItem({id}, FetchMilestoneByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (milestone) {             //      d7266936-17c1-4810-88d2-079ebb864d2e            Milestone ID
        return (
            // // <UserLargeCard user={user} />           // ProjectLargeCard?
            // <div>
            //     Projekty nahrány
            //     {JSON.stringify(projects)}       // debug informace
            // </div>

            <MilestoneLargeCard milestone={milestone} />
        )
    } else {
        return (
            <div>Nahrávám milestones...</div>
        )
    }
    
}