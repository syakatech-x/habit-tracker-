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
                    <div className="app">
                        <main className="container">
                            <h1 className="title">Habit Tracker📝</h1>
                            <InputBar />
                            <HabitList />
                        </main>
                    </div>
                </HabitsDispatchContext>
            </HabitsContext>
        </>
    );
}
