// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchFinanceByIdAsyncAction } from "../../Queries/Finance/FetchFinanceByIdAsyncAction.js"
import { FinanceLargeCard } from "../../Components/Finance/FinanceLargeCard.jsx"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst finance", success: "Načtení financí se povedlo"})
export const FinancePage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [finance, userPromise] = useFreshItem({id}, FetchFinanceByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (finance) {             //      f911230f-7e1f-4e9b-90a9-b921996ceb87            Finance ID
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