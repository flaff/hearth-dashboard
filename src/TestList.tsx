import React, {useState} from 'react';
import {useInfiniteScroll} from './hooks/useInfiniteScroll';

function TestRecord(props: {index: number}) {
    return <div style={{padding: '10px'}}>{props.index}</div>;
}

function createRecordsData(beginIndex: number, amount: number): Array<{index: number}> {
    return Array.from(Array(amount), (value, index) => ({index: beginIndex + index}))
}

export function TestList() {
    const [records, setRecords] = useState(createRecordsData(0, 30));
    const [canScrollDown, setCanScrollDown] = useInfiniteScroll(fetchAdditionalRecords);

    function fetchAdditionalRecords() {
        setTimeout(() => {
            setRecords((prevRecords) => [...prevRecords, ...createRecordsData(prevRecords.length, 10)]);
            setCanScrollDown(true);
        }, 1000);
    }

    return (
        <>
            {records.map((props, index) => {
               return <TestRecord index={props.index} key={index} />
            })}
            {!canScrollDown && <div>Fetching...</div>}
        </>
    )
}