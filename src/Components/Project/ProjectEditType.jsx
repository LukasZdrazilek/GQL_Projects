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
               {/*<option value="a825d8e1-2e60-4884-afdb-25642db581d8">GAČR</option>
               <option value="6abcd26b-4f9b-4b49-8a5d-8ec9880acf3e">TAČR</option>          
               <option value="d5d91230-6e52-4ebf-b467-bfe89311e31a">MV</option>
               <option value="4a9a0039-3363-4af7-866e-ee172bfb02ff">MŠMT</option>*/}
           </EditableAttributeSelect>
        </div>
    );
};
