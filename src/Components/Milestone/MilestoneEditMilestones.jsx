import {EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
import { RawUpdateMilestoneAsyncAction} from "../../Queries/UpdateMilestoneAsyncAction.js";
import { FetchProjectMilestonesAsyncAction} from "../../Queries/FetchProjectMilestonesAsyncAction.js";
import { useFreshItem, CreateAsyncQueryValidator, useDispatch  } from '@hrbolek/uoisfrontend-shared/src';
import { useState } from 'react';

const id = "43dd2ff1-5c17-42a5-ba36-8b30e2a243bb"
export const MilestoneEditType = ({milestone}) => {
    const [projecttypes, projecttypesPromise] = useFreshItem({id}, FetchProjectMilestonesAsyncAction)
    const [projecttypesdata, setThem] = useState([])
    projecttypesPromise.then(json =>
    {
        console.log(json)
        const r = json?.data?.result
        if (r)
        {
            setThem(r)
            console.log(r)
        }
    })
    const projectEx = { ...milestone, previous: milestone.previous.id};

    return (
        <div>
            <EditableAttributeSelect item={projectEx} attributeName="previous" label="Předcházející"
                                     asyncUpdater={RawUpdateMilestoneAsyncAction()}>
                <option value=""></option>
                {projecttypesdata.map(et => <option key={et.id} value={et.id}>{et.name}</option>)}
            </EditableAttributeSelect>
        </div>
    );
};
