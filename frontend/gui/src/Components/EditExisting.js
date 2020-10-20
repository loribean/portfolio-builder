
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
                    alert('Successfully saved your template!')
                })

        });
    };

    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
            const { design, html } = data;
            console.log('exportHtml', html);
            alert('Output HTML has been logged in your developer console.');

            let html2 = new Blob([html], {
                type: "application/pdf"
            });

            let url = URL.createObjectURL(html2)
            let a = document.createElement('a');
            a.href = url
            a.download = 'index.html';
            a.click();
        });
    };


    const onLoad = () => {
        emailEditorRef.current.editor.loadDesign(props.content);
        console.log(props, '---props')
    };


    return (
        <>
            {
                props.user === parseInt(localStorage.getItem('userdata')) ?
                    <div>

                        <button onClick={saveDesign}>Save Design</button>
                        <button onClick={exportHtml}>Download HTML</button>
                        <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
                        <DjangoCSRFToken />

                    </div>
                    : <div>

                        <button onClick={exportHtml}>Download HTML</button>
                        <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
                        <DjangoCSRFToken />

                    </div>
            }
        </>
    );
};

export default EditExisting

