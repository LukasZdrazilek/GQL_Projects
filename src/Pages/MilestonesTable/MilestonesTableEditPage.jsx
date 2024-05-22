import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchProjectByIdAsyncAction } from "../../Queries/Project/FetchProjectByIdAsyncAction.js"
import { MilestonesTableLargeCard } from "../../Components/MilestonesTable/MilestonesTableLargeCard.jsx";
import { MilestonesTableEditCard } from "../../Components/MilestonesTable/MilestonesTableEditCard.jsx";

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst milníky", success: "Načtení milníků se povedlo"})
export const MilestonesTableEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [project, userPromise] = useFreshItem({id}, FetchProjectByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (project) {             //      43dd2ff1-5c17-42a5-ba36-8b30e2a243bb            Project ID
        return (

            <MilestonesTableLargeCard project={project}>
                <MilestonesTableEditCard project={project} />
            </MilestonesTableLargeCard>
        )
    } else {
        return (
            <div>Nahrávám projekty...</div>
        )
    }

}