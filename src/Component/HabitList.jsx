import { useState } from "react";
import { useHabits, useDispatchHabits } from "./habitContext.jsx";
import "./HabitList.css";

function Habit({ habit }) {
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatchHabits();
    let textContent;
    if (isEdit) {
        textContent = (
            <>
                <input
                    value={habit.title}
                    onChange={e => {
                        dispatch({
                            type: "changed",
                            habit: {
                                ...habit,
                                title: e.target.value
                            }
                        });
                    }}
                />
                <button className="edited-btn" onClick={() => setIsEdit(false)}>
                    Save
                </button>
            </>
        );
    } else {
        textContent = (
            <>
                <span className="habit-text">{habit.title} </span>
                <button className="edited-btn" onClick={() => setIsEdit(true)}>
                    Edit
                </button>
            </>
        );
    }

    return (
        <li key={habit.id} className="list-habit">
            <input
                type="checkbox"
                checked={habit.done}
                disabled={isEdit}
                onChange={e => {
                    dispatch({
                        type: "changed",
                        habit: {
                            ...habit,
                            done: e.target.checked
                        }
                    });
                }}
            />{" "}
            {textContent}
            <button
                className="deleted-btn"
                disabled={isEdit}
                onClick={() =>
                    dispatch({
                        type: "deleted",
                        habitId: habit.id
                    })
                }
            >
                Hapus
            </button>
        </li>
    );
}

export function HabitList() {
    const habits = useHabits();
    const listHabit = habits.map(habit => {
        return <Habit habit={habit} />;
    });

    return <ul className="list-container">{listHabit}</ul>;
}
