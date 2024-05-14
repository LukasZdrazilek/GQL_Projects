import {EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
import { RawUpdateMilestoneAsyncAction} from "../../Queries/Milestone/UpdateMilestoneAsyncAction.js";
import { FetchProjectMilestonesAsyncAction} from "../../Queries/Project/FetchProjectMilestonesAsyncAction.js";
import { useFreshItem, CreateAsyncQueryValidator, useDispatch  } from '@hrbolek/uoisfrontend-shared/src';
import { useState } from 'react';

const id = "43dd2ff1-5c17-42a5-ba36-8b30e2a243bb";
export const MilestoneEditPrevious = ({milestone}) => {
    const [milestones, milestonesPromise] = useFreshItem({id}, FetchProjectMilestonesAsyncAction)
    const [projectmilestones, setThem] = useState([])
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
    const projectEx = { ...milestone, previous: milestone.previous?.id};

    return (
        <div>
            <EditableAttributeSelect item={projectEx} attributeName="previous" label="Předcházející"
                                     asyncUpdater={RawUpdateMilestoneAsyncAction()}>
                <option value=""></option>
                {projectmilestones.map(et => <option key={et.id} value={et.id}>{et.name}</option>)}
            </EditableAttributeSelect>
        </div>
    );
};

export const MilestoneEditNext = ({milestone}) => {
    const [milestones, milestonesPromise] = useFreshItem({id}, FetchProjectMilestonesAsyncAction)
    const [projectmilestones, setThem] = useState([])
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
    const projectEx = { ...milestone, previous: milestone.next?.id};

    return (
        <div>
            <EditableAttributeSelect item={projectEx} attributeName="next" label="Nadcházející"
                                     asyncUpdater={RawUpdateMilestoneAsyncAction()}>
                <option value=""></option>
                {projectmilestones.map(et => <option key={et.id} value={et.id}>{et.name}</option>)}
            </EditableAttributeSelect>
        </div>
    );
};
