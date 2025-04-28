import Link from 'next/link';

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li>
                        <Link href={'/parallel-routes'}>Parallel and Intercepting routes</Link>
                    </li>
                    <li>
                        <Link href={'/parallel-routes-tab'}>Parallel routes with tabs</Link>
                    </li>
                </ol>
            </main>
        </div>
    );
}
