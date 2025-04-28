import React from 'react';
import { Tabs } from './ui/Tabs';

export default function Page() {
    return (
        <>
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true" />

            <div className="fixed inset-0 z-10 w-screen p-5">
                <div className="flex min-h-full items-center justify-center text-center">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-lg">
                        <Tabs />
                    </div>
                </div>
            </div>
        </>
    );
}
