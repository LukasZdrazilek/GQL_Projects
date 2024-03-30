// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchUserByIdAsyncAction } from "../Queries"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst projekt", success: "Načtení projektu se povedlo"})
export const ProjectsPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [user, userPromise] = useFreshItem({id}, FetchUserByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (user) {
        return (
            <UserLargeCard user={user} />           // ProjectLargeCard?
        )
    } else {
        return (
            <div>Nahrávám projekty...</div>
        )
    }
    
}