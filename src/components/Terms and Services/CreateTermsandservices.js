import React, { useState, useEffect } from "react";
import Axios from "axios";
import { URL } from "../../url/url";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from 'react-toastify';

const CreateTermsandservices = () => {
  const [heading, setHeading] = useState([])
  const [description, setDescriptions] = useState([])
  const [data, getData] = useState([])

  const createTerms = () => {
    let postdata = { heading, description }

    fetch( URL + '/web/api/termsConditions', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ heading, description })
    }).then((result) => {
      result.json().then((data) => {
        toast.success("Success")
      }).catch((err) => {
        console.log(err)
      })
    })
  };

  useEffect(() => {
    getData1();
  }, []);

  const getData1 = async () => {
    await Axios.get(URL + '/web/api/getTerms').then(res => {
      getData(res.data.data);
      setHeading(res.data.data.heading);
      setDescriptions(res.data.data.description)
    }).catch(err => {
      console.log(err)
    })
  }

  const editdescription = (e) => {
    setDescriptions(e.target.value)
  }

  return (
    <>
      <div className="page-wrapper" style={{ minHeight: "250px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="application-detail-heading-area heading-top">
                <h2>Create Terms & Conditions</h2>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <div className="contact-notification-detail-main-area">
                <form className="send-notifications-form-area">
                  <div className="form-group">
                    <label>Heading</label>
                    <input type="text" className="form-control field" defaultValue={data.heading} onChange={(e) => { setHeading(e.target.value) }} name="holdername" placeholder="Enter Heading" autofocus="" required="" id="name" value={heading} />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={data.description}
                      onReady={editor => {
                        console.log('Editor is ready to use!', editor);
                      }}
                      
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setDescriptions(data);
                        
                      }}
                      onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                      }}
                    />
                  </div>
                  <div className="contact-form-submint-btn-area">
                    <button
                      type="button"
                      className="setting-submit-btn"
                      onClick={createTerms}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer" style={{textAlign: 'center', textDecoration: 'underline',color:'#912c00', letterSpacing: '2px',fontWeight: '500',width:'100%', paddingLeft:'30px'}}>
        © 2023 Who Shot, LLC. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default CreateTermsandservices;