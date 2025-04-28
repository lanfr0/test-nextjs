'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

function BackButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const router = useRouter();

    const goBack = useCallback(() => router.back(), [router]);

    return (
        <button {...props} onClick={goBack}>
            {props.children}
        </button>
    );
}

export { BackButton };
