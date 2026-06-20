import { useState } from "react";
import { useHabits, useDispatchHabits } from "./habitContext.jsx";

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
                <button onClick={() => setIsEdit(false)}>Save</button>
            </>
        );
    } else {
        textContent = (
            <>
                {habit.title}{" "}
                <button onClick={() => setIsEdit(true)}>Edit</button>
            </>
        );
    }

    return (
        <li key={habit.id}>
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
                disabled={isEdit}
                onClick={() =>
                    dispatch({
                        type: "deleted",
                        habitId: habit.id
                    })
                }
            >
                Delete
            </button>
        </li>
    );
}

export function HabitList() {
    const habits = useHabits();
    const listHabit = habits.map(habit => {
        return <Habit habit={habit} />;
    });

    return <ul>{listHabit}</ul>;
}
