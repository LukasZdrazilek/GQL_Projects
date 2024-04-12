import {EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
import {UpdateProjectAsyncAction } from '../../Queries/UpdateProjectAsyncAction'
import { FetchProjectTypesAsyncAction } from '../../Queries/FetchProjectTypesAsyncAction';
import { useFreshItem, CreateAsyncQueryValidator, useDispatch  } from '@hrbolek/uoisfrontend-shared/src';
import { useState } from 'react';

const id = "43dd2ff1-5c17-42a5-ba36-8b30e2a243bb"
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

    return
    (
         <div>
            <EditableAttributeSelect item={projectEx} attributeName="projectType_id" label="Typ" asyncUpdater={UpdateProjectAsyncAction}>
                <option value="a825d8e1-2e60-4884-afdb-25642db581d8">GAČR</option>
                <option value="6abcd26b-4f9b-4b49-8a5d-8ec9880acf3e">TAČR</option>          
                <option value="d5d91230-6e52-4ebf-b467-bfe89311e31a">MV</option>
                <option value="4a9a0039-3363-4af7-866e-ee172bfb02ff">MŠMT</option>
            </EditableAttributeSelect>
            {JSON.stringify(projecttypesdata)}
        </div>
    );
};
