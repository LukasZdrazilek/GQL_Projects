import {EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
import {RawUpdateProjectAsyncAction } from '../../Queries/Project/UpdateProjectAsyncAction'
import { FetchProjectTypesAsyncAction } from '../../Queries/Project/FetchProjectTypesAsyncAction';
import { useFreshItem, CreateAsyncQueryValidator, useDispatch  } from '@hrbolek/uoisfrontend-shared/src';
import { useState } from 'react';

// @module Projects
/**
 * ProjectEditType Component
 *
 * Provides an editable dropdown (`EditableAttributeSelect`) to modify the type
 * of a given project. It fetches available project types, populates the dropdown,
 * and handles updating the project's type on the server using asynchronous actions.
 *
 * @component
 *
 * @param {Object} project - project object
 * @param {string} project.id - its id
 * @param {Object} project.projectType - current type
 * @param {string} project.projectType.id - id, if any
 *
 * @returns {JSX.Element} The rendered ProjectEditType component containing the editable dropdown.
 * @function
 */

const id = ""
export const ProjectEditType = ({project}) => {
    const [projecttypes, projecttypesPromise] = useFreshItem({id}, FetchProjectTypesAsyncAction)
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
    const projectEx = { ...project, projectType_id: project?.projectType.id};

    return (
        <div>
           <EditableAttributeSelect item={projectEx} attributeName="projectType_id" label="Typ" asyncUpdater={RawUpdateProjectAsyncAction}>
               {projecttypesdata.map(et => <option key= {et.id} value={et.id}>{et.name}</option>)}
           </EditableAttributeSelect>
        </div>
    );
};
