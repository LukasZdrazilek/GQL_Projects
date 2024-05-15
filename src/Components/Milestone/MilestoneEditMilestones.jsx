import {EditableAttributeSelect, ItemActions} from '@hrbolek/uoisfrontend-shared/src';
import { MilestoneLinkAddAsyncAction} from "../../Queries/MilestoneLinkAddAsyncAction.js";
import { FetchProjectMilestonesAsyncAction} from "../../Queries/FetchProjectMilestonesAsyncAction.js";
import { useFreshItem } from '@hrbolek/uoisfrontend-shared/src';
import { useParams} from "react-router-dom";
import { useState } from 'react';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                             NOT WORKING CODE                                                       //
//                                        ONLY FOR FUTURE DISASSEMBLY                                                 //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const MilestoneEditPrevious = ({milestone}) => {
    const {id} = useParams()
    const [milestones, milestonePromise] = useFreshItem({id}, FetchProjectMilestonesAsyncAction)
    const [milestonesdata, setThem] = useState([])
    milestonePromise.then(json =>
    {
        console.log(json)
        const r = json?.data?.result?.project?.milestones;
        if (r)
        {
            setThem(r)
            console.log(r)
        }
    })
    const projectEx = { ...milestone, previous_id: milestone?.id};

    const asyncUpdater = (newValue) => {
        const updatedValue = {
            previousId: newValue.previous_id,
            nextId: id
        }

        // Return a plain object containing the action to dispatch
        const result = MilestoneLinkAddAsyncAction(updatedValue)
        const encapsulated = (dispatch) => {
            const dispatchresult = dispatch(result)
                .then(json => {
                    console.log("JSON")
                    console.log(JSON.stringify(json))
                    const project = json?.data?.result?.milestone?.project
                    console.log(JSON.stringify(project))
                    // dispatch(ItemActions.item_update(project))
                    return json
                })
            return  dispatchresult
        }
        return encapsulated
    };

    return (
            <EditableAttributeSelect
                item={projectEx}
                attributeName="previous_id"
                label="Předcházející"
                asyncUpdater={asyncUpdater}>
                <option value=""></option>
                {milestonesdata.map(et => <option key={et.id} value={et.id}>{et.name}</option>)}
            </EditableAttributeSelect>
    );
};

export const MilestoneEditNext = ({milestone}) => {
    const {id} = useParams()
    const [milestones, milestonesPromise] = useFreshItem({id}, FetchProjectMilestonesAsyncAction)
    const [milestonesdata, setThem] = useState([])
    milestonesPromise.then(json =>
    {
        console.log(json)
        const r = json?.data?.result?.project?.milestones;
        if (r)
        {
            setThem(r)
            console.log(r)
        }
    })
    const projectEx = { ...milestone};

    const asyncUpdater = (newValue) => {
        const updatedValue = {
            previousId: id,
            nextId: newValue.next_id
        };

        // Return a plain object containing the action to dispatch
        return MilestoneLinkAddAsyncAction(updatedValue).then(json => {
            console.log("JSON")
            console.log(JSON.stringify(json))
            return json
        });
    };

    return (
        <EditableAttributeSelect
            item={projectEx}
            attributeName="next_id"
            label="Nadcházející"
            asyncUpdater={asyncUpdater}>
            <option value=""></option>
            {milestonesdata.map(et => <option key={et.id} value={et.id}>{et.name}</option>)}
        </EditableAttributeSelect>
    );
};
