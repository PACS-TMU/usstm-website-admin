export default function CodeBlock({ children }: { children: React.ReactNode }) {
    return (
        <span className="px-2 py-1 rounded-md bg-foreground/20 text-foreground/80 font-mono">
            { children }
        </span>
    )
}