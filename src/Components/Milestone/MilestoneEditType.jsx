import { EditableAttributeSelect } from '@hrbolek/uoisfrontend-shared/src';
import { RawUpdateFinanceAsyncAction } from '../../Queries/UpdateFinanceAsyncAction'
import { FetchProjectMilestonesAsyncAction } from "../../Queries/FetchProjectMilestonesAsyncAction";
import { useFreshItem } from '@hrbolek/uoisfrontend-shared/src';
import { useState, useEffect } from 'react';

const id = "43dd2ff1-5c17-42a5-ba36-8b30e2a243bb"

export const MilestoneEditType = ({ project }) => {
    const [projectMilestones, setProjectMilestones] = useState([]);
    const [selectedMilestone, setSelectedMilestone] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const result = await FetchProjectMilestonesAsyncAction({ id });
            const fetchedMilestones = result?.data?.result?.milestones || [];
            setProjectMilestones(fetchedMilestones);
            console.log("Fetched Milestones:", fetchedMilestones);
            setSelectedMilestone(project?.milestones[0]?.id || ""); // Select the first milestone by default
        };

        fetchData();
    }, [id, project]);

    console.log("Selected Milestone:", selectedMilestone);

    const handleMilestoneChange = (e) => {
        setSelectedMilestone(e.target.value);
    };

    const milestoneEx = { ...project, projectMilestones_id: selectedMilestone };

    return (
        <div>
            <EditableAttributeSelect
                item={milestoneEx}
                attributeName="projectMilestones_id"
                label="Prechazejici"
                asyncUpdater={RawUpdateFinanceAsyncAction}
                value={selectedMilestone}
                onChange={handleMilestoneChange}
            >
                {projectMilestones.map(milestone => (
                    <option key={milestone.id} value={milestone.id}>
                        {milestone.name}
                    </option>
                ))}
            </EditableAttributeSelect>
        </div>
    );
};
