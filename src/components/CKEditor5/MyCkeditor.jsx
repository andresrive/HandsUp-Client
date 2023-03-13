import React from "react";
/* import Editor from 'ckeditor5-custom-build/build/ckeditor'; */
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-build-classic";

function MyCkeditor (){
    return(
        <div>
            <div className="App">
                <h2>Using Ck Editor 5 from online builder in REact</h2>
                <CKEditor
                    editor = {ClassicEditor}
                    data= "<p>Hello from Ckeditor 5! </p>"
                    onReady = { editor => {
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange ={ (editor, event) => {
                        const data = editor.getData();
                        console.log({event, editor, data});
                    }}
                    onBlur = { (event,editor) => {
                        console.log( 'Blur', editor);
                    }}
                    onFocus = { (event,editor) => {
                        console.log( 'Focus', editor);
                    }}
                />
            </div>
        </div>
    )
}

export default MyCkeditor;