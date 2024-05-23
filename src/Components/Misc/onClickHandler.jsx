import { useDispatch } from "react-redux";
import { CreateAsyncQueryValidator } from "@hrbolek/uoisfrontend-shared/src/Store/index.js";

const validator = CreateAsyncQueryValidator({error: "Něco se nepovedlo", success: "Objekt vytvořen"})

export const onClickHandler = (data, asyncCreator) => {
    const dispatch = useDispatch()
    return () => {
        const [onResolve, onReject] = validator(dispatch)
        const action = asyncCreator(data)
        dispatch(action).then(() => {
            onResolve();
            window.location.reload();
        }, onReject);
    }
}