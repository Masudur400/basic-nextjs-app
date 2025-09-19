"use client"

import React, { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [auto, setAuto] = useState(false);
    const [intervalMs, setIntervalMs] = useState(1000);

    // Auto increment
    useEffect(() => {
        if (!auto) return;
        const id = setInterval(() => add(), intervalMs);
        return () => clearInterval(id);
    }, [auto, step, intervalMs]);

    // সহজ ফাংশনগুলো
    const add = () => setCount((c) => c + step);
    const subtract = () => setCount((c) => Math.max(0, c - step));
    const reset = () => setCount(0);

    return (
        <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-6">
            <div className="w-full max-w-2xl opacity-85 border shadow-lg rounded-2xl p-6 md:p-10">
                <header className="mb-6 text-center">
                    <h1 className="text-2xl md:text-3xl font-extrabold">Counter</h1>
                    <p className="mt-1 text-sm  ">Simple counter with step, auto mode, and reset using TailwindCSS</p>
                </header>

                <main className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {/* Display */}
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center p-4 border rounded-xl">
                        <div className="  text-sm">Current Value</div>
                        <div className="mt-2 text-5xl md:text-6xl font-bold">{count}</div>

                        <div className="mt-4 flex gap-3">
                            <button onClick={subtract} className="px-4 py-2 rounded-lg shadow hover:translate-y-[-1px] transition-transform border" >
                                -
                            </button>

                            <button onClick={reset} className="px-4 py-2 rounded-lg shadow hover:brightness-95 transition-all border text-sm" >
                                Reset
                            </button>

                            <button onClick={add} className="px-4 py-2 rounded-lg shadow hover:translate-y-[-1px] transition-transform border" >
                                +
                            </button>

                        </div>
                    </div>

                    {/* Controls */}
                    <aside className="p-4 border rounded-xl">
                        <label className="block text-sm   mb-1">Step (এক ধাপে কত বাড়বে/কমবে)</label>
                        <input
                            type="number"
                            value={step}
                            onChange={(e) => setStep(Number(e.target.value))}
                            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-sky-300"
                            min="0"
                        />

                        <label className="block text-sm   mt-4 mb-1">Auto increment</label>
                        <button
                            onClick={() => setAuto(!auto)}
                            className={`mt-1 px-3 py-2 rounded-md border w-full ${auto ? "bg-sky-500 text-white" : ""}`}
                        >
                            {auto ? "Stop" : "Start"}
                        </button>

                        <label className="block text-sm  mt-4 mb-1">Interval (ms)</label>
                        <input
                            type="number"
                            value={intervalMs}
                            onChange={(e) => setIntervalMs(Number(e.target.value))}
                            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-sky-300"
                            min="100"
                        />
                    </aside>
                </main>
            </div>
        </div>
    );
}
