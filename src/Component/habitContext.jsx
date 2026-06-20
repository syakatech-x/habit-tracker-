import { createContext, useContext } from "react";

export const HabitsContext = createContext(null);
export const HabitsDispatchContext = createContext(null);

export function useHabits() {
    return useContext(HabitsContext);
}

export function useDispatchHabits() {
    return useContext(HabitsDispatchContext);
}

export function habitReducer(habits, action) {
    switch (action.type) {
        case "added": {
            return [
                ...habits,
                {
                    title: action.title,
                    id: action.nextId,
                    done: false
                }
            ];
        }
        case "changed": {
            return habits.map(h => {
                if (h.id === action.habit.id) {
                    return action.habit;
                } else {
                    return h;
                }
            });
        }
        case "deleted": {
            return habits.filter(h => h.id !== action.habitId);
        }
        default: {
            throw Error(`Unknown action: ${action.type}'`);
        }
    }
}

export const initialList = [
    {
        title: "Workout",
        id: 1,
        done: false
    },
    {
        title: "Belajar Coding",
        id: 2,
        done: false
    },
    {
        title: "Belajar Fisika",
        id: 3,
        done: false
    }
];
