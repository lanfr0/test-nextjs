import React from 'react';
import Link from 'next/link';
import { BackButton } from '@/components/BackButton';

export default function Page() {
    return (
        <>
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true" />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3
                                        className="text-base font-semibold text-gray-900"
                                        id="modal-title"
                                    >
                                        Slot modal
                                    </h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            This is a modal rendered in slot component
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <Link href={'/parallel-routes'}>
                                <BackButton
                                    type="button"
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    Back
                                </BackButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
