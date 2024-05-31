import { CreateAsyncQueryValidator } from "@hrbolek/uoisfrontend-shared/src/Store/index.js";
import { useDispatch } from "react-redux";
import { PlusLg } from "react-bootstrap-icons";
import { onClickHandler } from "./onClickHandler.jsx";

// @module Projects
/**
 * This is Create Button. Function is expecting two arguments: data and asyncCreator
 * Data are the expected variables in query
 * Recommended approach (copy to your code and edit accordingly to your query):
 * const data = {
 *     "expected_variable_1" : "value_1",
 *     "expected_variable_2" : "value_2"
 * }
 *
 * asyncCreator is an imported query used for creating
 *
 * Example usage:
 *
 * import { YourAsyncAction } from "your/pc/YourAsyncAction.jsx
 * import { CreateButton } from "somewhere/else/CreateButton.jsx"
 *
 * export const YourFunction = () => {
 *     const data = {
 *         "expected_variable_1" : "value_1",
 *         "expected_variable_2" : "value_2"
 *     }
 *
 *     return (
 *         <CreateButton data={data} asyncCreator={YourAsyncAction} />
 *     )
 * }
 * @function
 */

// const validator = CreateAsyncQueryValidator({error: "Něco se nepovedlo", success: "Objekt vytvořen"})
//
// export const CreateButton = ({data, asyncCreator}) => {
//     const dispatch = useDispatch()
//     const onClick = () => {
//         const [onResolve, onReject] = validator(dispatch)
//         const action = asyncCreator(data)
//         dispatch(action).then(() => {
//             onResolve();
//             window.location.reload();
//         }, onReject);
//     }
//     return (
//         <button className="btn form-control btn-outline-success" onClick={onClick}><PlusLg /></button>
//     )
// }

export const CreateButton = ({ data, asyncCreator}) => {
    const onClick = onClickHandler(data, asyncCreator);
    return (
        <button className="btn form-control btn-outline-success" onClick={onClick}><PlusLg/></button>
    )
}