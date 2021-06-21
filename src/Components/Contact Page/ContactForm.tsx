import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'




export default function ContactForm() {
    return (
        <div className="contactFormDiv" id="contactAnchor">
            <div className="contactPageTitleDiv">
                <h1 className="contactPageTitle">Contact</h1>
            </div>
            <div className="contactFormOuterDiv">
                <form className="contactPageForm" action="https://formsubmit.co/baileyreese123@gmail.com" method="POST" encType="multipart/form-data" name="EmailForm">

                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
                        <label className="form__label">Name</label>
                    </div>

                    <div className="form__group field">
                        <input type="email/input" className="form__field contactFormEmail" placeholder="Enter Email..." name="email" id='name' required />
                        <label className="form__label">Email Address</label>
                    </div>
            
                    <label className="contactFormTextAreaLabel">
                        Message<br/>

                        <Form.Control as="textarea" rows={3} className="contantFormTextArea" name="textArea" required />
                    </label><br/>
                    <input type="hidden" name="_next" value="http://localhost:3000/" />
                    <input type="hidden" name="_captcha" value="false" />
                    <Button variant="outline-secondary" type="submit" value="Submit" className="contactFormButton" block>Submit</Button>
                </form>
            </div>
        </div>

    )
}

