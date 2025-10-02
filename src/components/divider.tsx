export function HorizontalDivider({m = 5}: {m?: number}) {
    return (
        <div
            style={{ marginTop: m, marginBottom: m }}
            className="flex justify-center h-1 bg-[var(--palette-surface)] rounded-full"
        ></div>
    )
}
