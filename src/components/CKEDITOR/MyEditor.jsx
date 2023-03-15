import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import parse from "html-react-parser"
import React, { useState, Component } from "react"
import { useParams } from 'react-router-dom'
import "../../App.css"


export default function MyEditor() {
    const {packId} = useParams()
    const [text, setText] = useState("");



    return (
        
        <div className="trank">
            <div className="editor">
                <CKEditor
                    editor={ClassicEditor}
                    data= {text}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setText(data)
                    }}
                />
            </div>
            <div>
            <form>
                
                <textarea style={{width: '100%'}} value={text} onChange={(e) => setText(e.target.value)}></textarea>
            </form>

            </div>
        </div>
    )
}