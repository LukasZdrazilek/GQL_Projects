import { useState, useEffect } from "react";
import Select from "react-select";
import { useFreshItem} from "@hrbolek/uoisfrontend-shared/src";
import { useDispatch } from "react-redux";
import { FetchProjectMilestonesAsyncAction } from "../../Queries/Project/FetchProjectMilestonesAsyncAction.js";
import { MilestoneLinkAddAsyncAction } from "../../Queries/Milestone/MilestoneLinkAddAsyncAction.js";
import { MilestoneLinkRemoveAsyncAction } from "../../Queries/Milestone/MilestoneLinkRemoveAsyncAction.js";

export const SelectInputRework = ({ milestone }) => {
    const id = milestone.project.id;
    const [milestones, milestonePromise] = useFreshItem({ id }, FetchProjectMilestonesAsyncAction);
    const [milestonesData, setMilestonesData] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        milestonePromise.then(json => {
            console.log("json", json);
            const milestones = json?.data?.result?.milestones;
            if (milestones) {
                const formattedMilestones = milestones
                    .filter(ms => ms.id !== milestone.id) // Filter out the current milestone
                    .map(ms => ({
                        value: ms.id,
                        label: ms.name
                    }));
                setMilestonesData(formattedMilestones);

                const initialSelectedOptions = formattedMilestones.filter(ms =>
                    milestone.previous.some(prev => prev.id === ms.value)
                );
                setSelectedOptions(initialSelectedOptions);
            }
        });
    }, [milestonePromise, milestone.previous]);

    const handleSelect = (newSelectedOptions) => {
        const previousOptions = selectedOptions;

        const addedOptions = newSelectedOptions.filter(option =>
            !previousOptions.some(prevOption => prevOption.value === option.value)
        );

        const removedOptions = previousOptions.filter(option =>
            !newSelectedOptions.some(newOption => newOption.value === option.value)
        );

        addedOptions.forEach(option => onAdd(option));
        removedOptions.forEach(option => onRemove(option));

        setSelectedOptions(newSelectedOptions);
    };

    const onAdd = (option) => {
        const updatedValue = {
            previousId: option.value,
            nextId: milestone.id,
        }
        const action = MilestoneLinkAddAsyncAction(updatedValue);
        console.log("Milestone added:", option);
        dispatch(action)
    };

    const onRemove = (option) => {
        const updatedValue = {
            previousId: option.value,
            nextId: milestone.id,
        }
        const action = MilestoneLinkRemoveAsyncAction(updatedValue);
        console.log("Milestone removed:", option);
        dispatch(action)
    };

    return (
            <div className="dropdown-container">
                <Select
                    options={milestonesData}
                    placeholder="Předcházející milníky"
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={true}
                    isMulti
                />
            </div>
    );
};
