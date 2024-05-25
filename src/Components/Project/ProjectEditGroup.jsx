import {EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
import {RawUpdateProjectAsyncAction } from '../../Queries/Project/UpdateProjectAsyncAction'
import { FetchGroupsAsyncAction} from "../../Queries/FetchGroupsAsyncAction.js";
import { useFreshItem, CreateAsyncQueryValidator, useDispatch  } from '@hrbolek/uoisfrontend-shared/src';
import { useState } from 'react';

/**
 * ProjectEditGroup Component
 *
 * Provides an editable dropdown (`EditableAttributeSelect`) to modify the group
 * associated with a given project. 
 * It fetches all available groups, populates the dropdown, 
 * and handles updating the project's group on the server using asynchronous actions.
 *
 * @component
 *
 * @param {Object} project - project objected
 * @param {string} project.id - its ID 
 * @param {Object} project.group - current group
 * @param {string} project.group.id - its id, if any 
 *
 * @returns {JSX.Element} The rendered ProjectEditGroup component, containing the editable dropdown.
 * 
 */

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
