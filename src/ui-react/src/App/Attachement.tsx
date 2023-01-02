
import { at } from 'lodash';
import React, { useEffect, useState } from 'react';
import Activity, { AddActivity } from './Activity';
import AddButton from '../components/Buttons/AddButton';
import CustomButton from '../components/Buttons/CustomBotton';
import Card from '../components/cards/Card';
import CardContainer from '../components/cards/CardContainer';
import NextIconButton from '../components/IconButtons/NextIconButton';
import PrevIconButton from '../components/IconButtons/PrevIconButton';
import ImageUpload from '../components/Inputs/ImageUpload';
import { MemoType } from '../types';
import useMemos from '../state/context';
import GridItem from '../components/Views/GridItem';
import DeleteIconButton from '../components/IconButtons/DeleteIconButton';

function Attachements({attachementIds,pid}:{attachementIds:string[],pid:string}) {
    const {removeAttachement} =useMemos();
    const [currIndex,setcurrInex] = useState(0);
    const [uploading,setUploading]=useState(false);
    const onUploading = (val:boolean)=> {
        setUploading(val);
    }

    const onChange = (change:number)=> {
        let nextIndex=currIndex+change;
        if(nextIndex===attachementIds.length) {
            nextIndex=0;
        }
        if(nextIndex===-1) {
            nextIndex=attachementIds.length-1;
        }
        setcurrInex(nextIndex);
    }

    const onNext = ()=> {
        onChange(1);
    }
    const onPrev = ()=> {
        onChange(-1);
    }

    const onRemove = async ()=> {
        if(attachementIds[currIndex]) {
           
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({pid,id:attachementIds[currIndex]})
                };
                const response = await fetch('http://localhost:5001/memos/removeAttachement', requestOptions);
                if(response &&  removeAttachement) {
                    removeAttachement({pid,id:attachementIds[currIndex]});
                }
                onNext();
          
            }
        }
    
  
    return (
        <>
         {attachementIds.length>1 && (
            <GridItem xs={12} >
            <CardContainer direction='row' justify='space-between'>
                <PrevIconButton label='Previous' onClick={onPrev}/>
                <DeleteIconButton label="Delete" onClick={onRemove}/>
                <NextIconButton label='Next' onClick={onNext}/>

            </CardContainer>
            </GridItem>
          )}
            {!uploading && attachementIds.length>0 && <Attachement atid={attachementIds[currIndex]} pid={pid} key={attachementIds[currIndex]}  />}
            <AddAttachement pid={pid} onUploading={onUploading} />
        
        </>
    );
}

function Attachement({ atid,pid }: { atid:string,pid:string}) {
    const {attachements,addAttachement}=useMemos();
    useEffect(()=> {
        const getAttachment = async ()=> {
           const fetchResponse=await fetch(`http://localhost:5001/memos/attachement/${atid}`);
           const fetchedAttachement = await fetchResponse.json();

           addAttachement && addAttachement({...fetchedAttachement,pid});
        }
        getAttachment();
    },[atid])

    const attachement = attachements[atid];
    if(!attachement) {
        return null;
    }
    return (
    <Card xs={12}  defaultClass>
        <img src={attachement.url} width='95%' />
    </Card>
    );
}

export function AddAttachement({pid,onUploading}:{pid:string,onUploading?:(val:boolean)=>void}) {
    
    const {addAttachement} = useMemos();

    // const addAttachement = async () => {
       
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //     };
    //     await fetch('http://localhost:5001/memos/addAttachement', requestOptions);
    // }

    return (
      
        <ImageUpload pid={pid} onUploading={onUploading} save={true} afterUpload={addAttachement}/>
    )
}

export default Attachements;