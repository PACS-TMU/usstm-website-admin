export default function CopiedMessage({ isCopied }: { isCopied: boolean }) {
    return (
        <>
            {isCopied && (
                <div className="fixed bottom-[5%] right-[2.5%] z-50 max-w-full bg-green-500 text-foreground p-4 rounded-md">
                    <p className="text-sm text-foreground">Email copied to clipboard!</p>
                </div>
            )}
        </>
    );
}
