
import React, { useRef } from 'react';
import EmailEditor from 'react-email-editor';
import DjangoCSRFToken from 'django-react-csrftoken';
import Cookies from 'js-cookie'





const EditExisting = (props) => {
    const emailEditorRef = useRef(null);


    const saveDesign = () => {
        emailEditorRef.current.editor.saveDesign((design) => {
            let data = { title: props.title, content: design, id: props.id, "csrfmiddlewaretoken": Cookies.get('csrftoken') }
            console.log(data)
            fetch(`http://localhost:8000/api/${props.id}/update/`, {
                method: 'PUT',
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


    const onLoad = () => {
        emailEditorRef.current.editor.addEventListener(
            'onDesignLoad',
            onDesignLoad
        );
        emailEditorRef.current.editor.loadDesign(props.content);
        console.log(props.content, '---props')
    };


    return (
        <div>
            <button onClick={saveDesign}>Save Design</button>
            <button onClick={exportHtml}>Export HTML</button>
            <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
            <DjangoCSRFToken />

        </div>
    );
};

export default EditExisting

