import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchProjectByIdAsyncAction } from "../Queries/Project/FetchProjectByIdAsyncAction"
import {ProjectFinancesLargeCard } from "../Components/Project/ProjectLargeCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst milníky", success: "Načtení milníků se povedlo"})
export const FinancesTablePage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [projects, userPromise] = useFreshItem({id}, FetchProjectByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (projects) {             //      43dd2ff1-5c17-42a5-ba36-8b30e2a243bb            Project ID
        return (

            <ProjectFinancesLargeCard project={projects} />
        )
    } else {
        return (
            <div>Nahrávám projekty...</div>
        )
    }

}