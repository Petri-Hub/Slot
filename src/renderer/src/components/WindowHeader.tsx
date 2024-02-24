import React from "react";

export function WindowHeader({ title, description }) {
    return (
        <header
            style={{ '-webkit-app-region': 'drag' } as React.CSSProperties}
            className="flex justify-between">
            <div>
                <div className="-scale-x-100 w-min">🌙</div>
                <h1 className="text-zinc-200 text-lg">{title}</h1>
                <p className="text-zinc-500 text-sm">{description}</p>
            </div>
            <ul
                style={{ '-webkit-app-region': 'no-drag' } as React.CSSProperties}
                className="flex gap-x-2">
                <li
                    className="cursor-pointer text-2xl font-mono text-zinc-200"
                    onClick={() => window.api.closeEverything()}>X</li>
            </ul>
        </header>
    )
}