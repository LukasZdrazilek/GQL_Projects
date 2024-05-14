import {EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
import {RawUpdateFinanceAsyncAction } from '../../Queries/Finance/UpdateFinanceAsyncAction'
import { FetchFinanceTypesAsyncAction } from '../../Queries/Finance/FetchFinanceTypesAsyncAction';
import { useFreshItem, CreateAsyncQueryValidator, useDispatch  } from '@hrbolek/uoisfrontend-shared/src';
import { useState } from 'react';

const id = "43dd2ff1-5c17-42a5-ba36-8b30e2a243bb"
export const FinanceEditType = ({finance}) => {
    const [financetypes, financetypesPromise] = useFreshItem({id}, FetchFinanceTypesAsyncAction)
    const [financetypesdata, setThem] = useState([])
    financetypesPromise.then(json =>  
    {
        console.log(json)
        const r = json?.data?.result
        if (r)
        {
            setThem(r)
            console.log(r)
        }
    })
    const financeEx = { ...finance, financeType_id: finance?.financeType.id};

    return (
        <div>
           <EditableAttributeSelect item={financeEx} attributeName="financeType_id" label="Typ" asyncUpdater={RawUpdateFinanceAsyncAction}>
               {financetypesdata.map(et => <option key= {et.id} value={et.id}>{et.name}</option>)}
           </EditableAttributeSelect>
        </div>
    );
};
