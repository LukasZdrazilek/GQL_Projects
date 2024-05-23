import {EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
import {RawUpdateProjectAsyncAction } from '../../Queries/Project/UpdateProjectAsyncAction'
import { FetchProjectTypesAsyncAction } from '../../Queries/Project/FetchProjectTypesAsyncAction';
import { useFreshItem, CreateAsyncQueryValidator, useDispatch  } from '@hrbolek/uoisfrontend-shared/src';
import { useState } from 'react';

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
