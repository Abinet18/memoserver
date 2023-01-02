import React, {  useContext, useEffect, useState } from 'react';
import ActivityIconMenu from './ActivityIconMenu';
import Attachements from './Attachement';
import AddButton from '../components/Buttons/AddButton';
import SubmitButton from '../components/Buttons/SubmitButton';
import Card from '../components/cards/Card';
import { Editor } from '../components/Inputs/Editor';
import TextInput from '../components/Inputs/TextInput';
import { Header } from '../components/Views/Header';
import useMemos, { MemoContext } from '../state/context';
import { ActivityType } from '../types';


function Activity({ acid }: { acid: string }) {
    const {activities,addActivity,removeActivity} = useMemos();
    const [isUpdating,setIsUpdating]=useState(false);
    const onOpen = ()=>{
        setIsUpdating(true);
    }
    useEffect(() => {

        const getActivity = async () => {
            const fetchedActivity = await (await fetch(`http://localhost:5001/memos/activity/${acid}`)).json();
            // console.log(fetchedActivity);
            addActivity && addActivity(fetchedActivity);
        }
        getActivity();
    }, [acid,isUpdating]);

    const activity = activities[acid];
    if (!activity) {
        return null;
    }
    const attachementIds = (activity.attachmentIds??'').split(',').filter(v=>v.length>0);
    const onRemove = async ()=> {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(activity)
        };
        const response = await fetch('http://localhost:5001/memos/removeActivity', requestOptions);
        if(response &&  removeActivity) {
            removeActivity(activity);
        }
  
    }
 
    return(<>
    <UpdateActivity isUpdating={isUpdating} setIsUpdating={setIsUpdating} activity={activity}></UpdateActivity>
    {!isUpdating && (
        <>
        <Header label={activity.title} actions={ <ActivityIconMenu acid={activity.id} onEdit={onOpen} onRemove={onRemove}/>} actionpos='right'/>
        <Card xs={12} alignItems="center" defaultClass>    
        <Editor  value={activity.detail}  editable={false}/>
        <Attachements attachementIds={(attachementIds)} pid={activity.id}/>
        </Card>
        </>)}
    </>) 

}

export function AddActivity({ pid }: { pid: string }) {
    const [localActivity, setLocalActivity] = useState({ pid, title: '', detail: '' });
    const {addActivity} = useMemos();

    const [open,setOpen]=useState(false);
    const onClose = ()=> {
        setOpen(false);
    }
    const onOpen = ()=> {
        setOpen(true);
    }
     const setTitle = (value:string) => {
        setLocalActivity({ ...localActivity, title: value });
    }
    const setDetail = (value:string) => {
        setLocalActivity({ ...localActivity, detail: value});
    }

    const _addActivity = async () => {
        if (!localActivity.title) {
            return;
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(localActivity)
        };
        const response = await fetch('http://localhost:5001/memos/addActivity', requestOptions);
        const addedActivity = await response.json();
        console.log('added activity',addedActivity);
        addActivity && addActivity(addedActivity);
        setLocalActivity({ pid, title: '', detail: '' });
        setOpen(false);

    }

    return ( <>
       <Card hide={open} xs={12} alignItems="center"  defaultClass>
        <AddButton onClick={onOpen} label="Add Activity"/>
    </Card>
        <Card xs={12} hide={!open} alignItems="center" defaultClass>
        <TextInput value={localActivity.title} onChange={setTitle} label="Title" placeholder='Title' />
        <Editor  value={localActivity.detail} onChange={setDetail} editable/>
        <SubmitButton onClick={_addActivity} label="Add Activity"/>
        </Card> 
        </>);
}

export function UpdateActivity({ activity,isUpdating,setIsUpdating }: { activity: ActivityType ,isUpdating:boolean,setIsUpdating:(v:boolean)=>void}) {
    const [localActivity, setLocalActivity] = useState(activity);
    const {updateActivity} = useMemos();

    const onOpen = ()=>{setIsUpdating(true);}
   
     const setTitle = (value:string) => {
        setLocalActivity({ ...localActivity, title: value });
    }
    const setDetail = (value:string) => {
        setLocalActivity({ ...localActivity, detail: value});
    }

    const _updateActivity = async () => {
        if (!localActivity.title) {
            return;
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(localActivity)
        };
        const response = await fetch('http://localhost:5001/memos/updateActivity', requestOptions);
        const updatedActivity = await response.json();
        updateActivity && updateActivity(updatedActivity);

        setIsUpdating(false);

    }

    return ( 
        <Card xs={12} hide={!isUpdating} alignItems="center" defaultClass>
        <TextInput value={localActivity.title??''} onChange={setTitle} label="Title" placeholder='Title' />
        <Editor  value={localActivity.detail} onChange={setDetail} editable/>
        <SubmitButton onClick={_updateActivity} label="Update Activity"/>
        </Card> 
        );
}


export default Activity;