'use client'

import React, { use, useState } from 'react'
import { FilterCheckbox, FilterCheckboxProps } from '@/components/shared';
import { Input } from '@/components/ui';

type Item = FilterCheckboxProps;

interface Props {
    className?: string;
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = (
        { 
            className,
            title,
            items,
            defaultItems,
            limit = 5,
            searchInputPlaceholder = 'Поиск...',
            onChange,
            defaultValue
        }
    ) => {
    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const list = showAll 
        ? items.filter((item) => item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) 
        : defaultItems?.slice(0, limit);

    return (
        <div className={className}>
            <p className='font-bold mb-3'>{title}</p>

            {
                showAll && (
                    <div className='mb-5'>
                        <Input onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} className='bg-gray-50 border-none' />
                    </div>
                )
            }

            <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
                {
                    list.map((item, index) => (
                        <FilterCheckbox 
                            onCheckedChange={(ids) => console.log(ids)}
                            checked={false}
                            key={index}
                            value={item.value}
                            text={item.text}
                            endAdornment={item.endAdornment}
                        />
                    ))
                }
            </div>

            {
                items.length > limit && (
                    <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                        <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
                            {showAll ? 'Скрыть' : '+ Показать все'}
                        </button>
                    </div>
                )
            }
        </div>
    )
}