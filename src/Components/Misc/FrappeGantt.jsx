import { useEffect, useRef, useState } from 'react';
import Gantt from 'frappe-gantt';

export const FrappeGantt = ({ tasks }) => {
    const ganttRef = useRef(null);
    const [viewMode, setViewMode] = useState("Day");

    // Sort tasks by start date
    const sortedTasks = tasks.slice().sort((a, b) => new Date(a.start) - new Date(b.start));

    useEffect(() => {
        if (ganttRef.current) {
            new Gantt(ganttRef.current, sortedTasks, {
                view_mode: viewMode,
                on_click: task => console.log(task),
                on_date_change: (task, start, end) => console.log(task, start, end),
                on_progress_change: (task, progress) => console.log(task, progress),
                on_view_change: mode => console.log(mode)
            });
        }
    }, [sortedTasks, viewMode]); // Update dependency to include sortedTasks

    const onClick = (range) => () => {
        setViewMode(range);
    }

    return (
        <div>
            <div ref={ganttRef}></div>
            <div className="mx-auto mt-3 btn-group" role="group">
                <button type="button" className="btn btn-sm btn-light" onClick={onClick("Day")}>Dny</button>
                <button type="button" className="btn btn-sm btn-light" onClick={onClick("Week")}>Týdny</button>
                <button type="button" className="btn btn-sm btn-light" onClick={onClick("Month")}>Měsíce</button>
                <button type="button" className="btn btn-sm btn-light" onClick={onClick("Year")}>Roky</button>
            </div>
        </div>
    )
};
