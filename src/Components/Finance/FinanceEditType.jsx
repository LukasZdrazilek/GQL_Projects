import {EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
import {RawUpdateFinanceAsyncAction } from '../../Queries/Finance/UpdateFinanceAsyncAction'
import { FetchFinanceTypesAsyncAction } from '../../Queries/Finance/FetchFinanceTypesAsyncAction';
import { useFreshItem, CreateAsyncQueryValidator, useDispatch  } from '@hrbolek/uoisfrontend-shared/src';
import { useState } from 'react';

/**
 * FinanceEditType Component
 *
 * Provides a web component with expendable dropdown to modify the finance type attribute.
 * Editable attribte This component fetches available finance types, populates the dropdown,
 * and handles updating the finance type on the server using asynchronous actions.
 *
 * @component
 *
 * @param {Object} finance - The finance object to be edited.
 * @param {string} finance.id - The ID of the finance object.
 * @param {Object} finance.financeType - The current finance type object (optional).
 * @param {string} finance.financeType.id - The ID of the current finance type (optional).
 *
 * @returns {JSX.Element} The rendered FinanceEditType component 
 * 
 */


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
