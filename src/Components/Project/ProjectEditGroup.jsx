import {EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
import {RawUpdateProjectAsyncAction } from '../../Queries/Project/UpdateProjectAsyncAction'
import { FetchGroupsAsyncAction} from "../../Queries/FetchGroupsAsyncAction.js";
import { useFreshItem, CreateAsyncQueryValidator, useDispatch  } from '@hrbolek/uoisfrontend-shared/src';
import { useState } from 'react';

const id = ""
export const ProjectEditGroup = ({project}) => {
    const [groups, groupsPromise] = useFreshItem({id}, FetchGroupsAsyncAction)
    const [groupsdata, setThem] = useState([])
    groupsPromise.then(json =>
    {
        console.log(json)
        const r = json?.data?.result
        if (r)
        {
            setThem(r)
            console.log(r)
        }
    })
    const projectEx = { ...project, group_id: project?.group?.id};

    return (
        <div>
            <EditableAttributeSelect item={projectEx} attributeName="group_id" label="Tým" asyncUpdater={RawUpdateProjectAsyncAction}>
                {groupsdata.map(et => <option key= {et.id} value={et.id}>{et.name}</option>)}
            </EditableAttributeSelect>
        </div>
    );
};
