import { methodOf } from 'lodash';
import React, { useEffect, useState } from 'react';
import Activity, { AddActivity } from './Activity';
import AddButton from '../components/Buttons/AddButton';
import Card from '../components/cards/Card';
import useMemos from '../state/context';
import { MemoType } from '../types';

function Memos() {
    const {memoIds,memos, addMemo} = useMemos();
    useEffect(() => {

        const fetchMemos = async () => {
            const fetchedMemos = await (await fetch('http://localhost:5001/memos')).json();
            fetchedMemos.forEach((fetchedMemo:MemoType)=> {
                addMemo && addMemo(fetchedMemo);
            })
        }
        fetchMemos();
    }, []);
    return (
        <div className="memos">
            {memoIds.map(m => <Memo memo={memos[m]} key={m} />)}
            <AddMemo/>
        </div>
    );
}

function Memo({ memo }: { memo: MemoType }) {
    return (
    <Card xs={12} header={<h2>{getDateString(memo.memoDate)}</h2>} defaultClass>
        <div className='activities'>
            {(memo?.activityIds??'').split(',').map(acid => <Activity acid={acid} key={acid} />)}
            <AddActivity pid={memo.id} />
        </div>
    </Card>
    );
}

export function AddMemo() {
    
    const { addMemo} = useMemos();
    const _addMemo = async () => {
       
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        const response=await fetch('http://localhost:5001/memos/addMemo', requestOptions);
        const addedMemo = await response.json();
        addMemo && addMemo(addedMemo);
        console.log('added memo',addedMemo)
    }

    return (
       <Card  xs={12} alignItems="center" defaultClass>
        <AddButton onClick={_addMemo} label="Add Memo"/>
    </Card>)
}

function getDateString(date: string | Date | null | undefined): string {
    if (!date) {
        return '';
    }
    else if (typeof date == 'string') {
        return new Date(date).toDateString();
    }
    else return date.toDateString();

}

export default Memos;