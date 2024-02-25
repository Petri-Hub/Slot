export function TimerNumber({ children }: React.PropsWithChildren) {
    return (
        <div style={{ fontFamily: "DSDigital" }} className="font-bold size-full relative text-3xl text-red-900">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{children}</span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{children}</span>
        </div>
    )
}