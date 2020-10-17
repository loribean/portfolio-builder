
import React, { useRef } from 'react';
import EmailEditor from 'react-email-editor';
import DjangoCSRFToken from 'django-react-csrftoken';
import Cookies from 'js-cookie'





const Editor = (props) => {
    const emailEditorRefNew = useRef(null);


    const saveDesign = () => {
        emailEditorRefNew.current.editor.saveDesign((design) => {

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
        emailEditorRefNew.current.editor.exportHtml((data) => {
            const { design, html } = data;
            console.log('exportHtml', html);
            alert('Output HTML has been logged in your developer console.');
        });
    };



    return (
        <div>
            <button onClick={saveDesign}>Save Design</button>
            <button onClick={exportHtml}>Export HTML</button>
            <EmailEditor ref={emailEditorRefNew} />
            <DjangoCSRFToken />

        </div>
    );
};

export default Editor

