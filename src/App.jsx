import { useState, useReducer, useRef } from "react";
import {
    habitReducer,
    initialList,
    HabitsContext,
    HabitsDispatchContext
} from "./Component/habitContext.jsx";
import { HabitList } from "./Component/HabitList.jsx";
import { InputBar } from "./Component/InputHabit.jsx";
import "./App.css";

export default function App() {
    const [habits, dispatch] = useReducer(habitReducer, initialList);
    return (
        <>
            <HabitsContext value={habits}>
                <HabitsDispatchContext value={dispatch}>
                    <h1>Habit Tracker</h1>
                    <InputBar />
                    <HabitList />
                </HabitsDispatchContext>
            </HabitsContext>
        </>
    );
}
