export function TimerNumber({ children }: React.PropsWithChildren) {
    return (
        <div className="font-bold size-full relative text-3xl text-black dark:text-white">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{children}</span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{children}</span>
        </div>
    )
}