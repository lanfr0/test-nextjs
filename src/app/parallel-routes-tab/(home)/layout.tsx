import React from 'react';

export default function Layout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <div className={'relative h-screen w-screen bg-black p-5'}>
            <div className={'rounded-2xl p-5 bg-white w-full h-full'}>
                <h1>Homepage layout</h1>
                {children}
                {modal}
            </div>
        </div>
    );
}
