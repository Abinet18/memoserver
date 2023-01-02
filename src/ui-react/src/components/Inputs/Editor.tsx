import { makeStyles } from '@mui/styles';
import React, {  useEffect, useState } from 'react';
// Import the Slate editor factory.
import { createEditor } from 'slate'
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

type EditorProps = {
    value?:string,
    onChange?: (val:string)=>void
    editable? :boolean
}

const editorStyles = makeStyles(()=>({
    editable:{
        margin:4,
        border:'1px solid',
        padding:4
    }

}));

const getJsonValue = (value:string)=> {
    try {
        let jsonParseD= JSON.parse(value);
        return jsonParseD;
    }
    catch(e) {
        return [{
            type: 'paragraph',
            children: [{ text: value }],
        }]
    }
    
}
export const Editor = ({value,onChange,editable}:EditorProps) => {
    const [editor] = useState(() => withReact(createEditor()));
    const classes = editorStyles();
    const editorValue = getJsonValue(value??'');
    return (
        <Slate
          editor={editor}
          value={editorValue}
          onChange={value => {
            const isAstChange = editor.operations.some(
              op => 'set_selection' !== op.type
            )
            if (isAstChange && onChange) {
              // Save the value to Local Storage.
              const content = JSON.stringify(value)
              onChange(content);
            }
          }}
        >
          <Editable contentEditable={editable} className={editable?classes.editable:undefined}/>
        </Slate>
    );
}