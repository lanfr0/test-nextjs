'use client';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import React, { useMemo } from 'react';
import { useHash } from '@/hooks/useHash';
import Link from 'next/link';

const tabs = [
    { name: 'Category', href: '' },
    { name: 'Suppliers', href: 'suppliers' },
];

function Tabs() {
    const { hash } = useHash();
    const selectedIndex = useMemo(() => (hash === '' ? 0 : 1), [hash]);

    return (
        <div className="border-b border-gray-200 px-4">
            <TabGroup manual selectedIndex={selectedIndex}>
                <TabList className={'flex space-x-8'}>
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.name}
                            className={
                                'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                            }
                        >
                            <Link href={`#${tab.href}`}>{tab.name}</Link>
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    <TabPanel>
                        {['Divani', 'Mobili', 'Lampade', 'Piante', 'Sgabelli', 'Tende'].map(
                            (_t, index) => {
                                return (
                                    <div key={index} className={'--item'}>
                                        <div className={'icon'}></div>
                                        {_t}
                                    </div>
                                );
                            }
                        )}
                    </TabPanel>
                    <TabPanel>
                        {' '}
                        {['Fornitore1', 'Fornitore2', 'Fornitore3'].map((_t, index) => {
                            return (
                                <div key={index} className={'--item'}>
                                    <div className={'icon'}></div>
                                    {_t}
                                </div>
                            );
                        })}
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    );
}

export { Tabs };
