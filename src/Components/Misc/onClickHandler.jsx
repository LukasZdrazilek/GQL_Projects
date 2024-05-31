import { useDispatch } from "react-redux";
import { CreateAsyncQueryValidator } from "@hrbolek/uoisfrontend-shared/src/Store/index.js";

// @module Projects
/**
 * onClickHandler Function
 *
 * Creates an event handler function that dispatches an asynchronous action and 
 * handles the result using a validator.
 * designed to be used with UI elements that trigger asynchronous 
 * refreshes page after succesful completion
 *
 * @function
 *
 * @param {Object} data - data payload passed to the assyncreator
 * @param {Function} asyncCreator - A function that takes the data and returns action to be dispatched
 *
 * @returns {Function} An event handler function that can be attached to an onClick event.
 * @function
 */

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
