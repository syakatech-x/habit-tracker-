import { useState, useRef } from "react";
import { useDispatchHabits } from "./habitContext.jsx";
import "./InputHabit.css";

export function InputBar() {
    const [title, setTitle] = useState("");
    const nextIdRef = useRef(3);
    let dispatch = useDispatchHabits();

    return (
        <>
            <input
                className="inputHabit"
                placeholder="masukkan habit..."
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button
                className="addBtn"
                onClick={() => {
                    if (!title) {
                        alert("Input tidak boleh kosong!");
                        return;
                    }
                    dispatch({
                        type: "added",
                        nextId: ++nextIdRef.current,
                        title: title
                    });
                    setTitle("");
                }}
            >
                tambah habit
            </button>
        </>
    );
}
