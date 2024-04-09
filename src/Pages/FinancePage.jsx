// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchFinanceByIdAsyncAction } from "../Queries/FetchFinanceByIdAsyncAction"
import { FinanceLargeCard } from "../Components/Finance/FinanceLargeCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst finance", success: "Načtení financí se povedlo"})
export const FinancePage = ()  => {
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

            <FinanceLargeCard finance={finance} />
        )
    } else {
        return (
            <div>Nahrávám finance...</div>
        )
    }
    
}