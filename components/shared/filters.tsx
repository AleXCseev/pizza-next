import { cn } from '@/lib/utils';
import { Title, FilterCheckbox } from '@/components/shared'
import React from 'react'

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("", className)}>
            <Title text="Фильтрация" size="sm" className='mb-5 font-bold' />

            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Можно собирать' value='1'/>
                <FilterCheckbox text='Новинки' value='2'/>
            </div>
        </div>
    )
}