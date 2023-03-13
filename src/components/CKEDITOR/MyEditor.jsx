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
                    data={text}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setText(data)
                    }}
                />
            </div>
            <div>
                <h2>Content</h2>
                <p>{(text)}</p>
            </div>
        </div>
    )
}