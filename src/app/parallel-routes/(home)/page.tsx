import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <Link href={'/parallel-routes/search'}>
            <button
                type="button"
                className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Children button
            </button>
        </Link>
    );
}
