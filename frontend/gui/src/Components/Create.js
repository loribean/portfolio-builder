
import React, { useRef } from 'react';
import { render } from 'react-dom'
import EmailEditor from 'react-email-editor';
import DjangoCSRFToken from 'django-react-csrftoken';
import axios from 'axios';
import Cookies from 'js-cookie'





const Editor = (props) => {
    const emailEditorRef = useRef(null);


    const saveDesign = () => {
        emailEditorRef.current.editor.saveDesign((design) => {

            let data = { title: 'no', content: design, "csrfmiddlewaretoken": Cookies.get('csrftoken') }
            console.log(data)
            fetch('http://localhost:8000/api/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                    console.log(response);
                })

        });
    };

    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
            const { design, html } = data;
            console.log('exportHtml', html);
            alert('Output HTML has been logged in your developer console.');
        });
    };

    const onDesignLoad = (data) => {
        console.log('onDesignLoad', data);
    };


    return (
        <div>
            <button onClick={saveDesign}>Save Design</button>
            <button onClick={exportHtml}>Export HTML</button>
            <EmailEditor ref={emailEditorRef} />
            <DjangoCSRFToken />

        </div>
    );
};

export default Editor

