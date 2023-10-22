import React, { useState } from 'react'

export default function ContactPage() {
    var [contact, setcontact] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    var [show, setshow] = useState(false)
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setcontact((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        alert(
            `
                Name : ${contact.name}
                Email : ${contact.email}
                Phone : ${contact.phone}
                Subject : ${contact.subject}
                Message : ${contact.message}
            `
        )
        setshow(true)
        setcontact({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        })
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 col-12'>
                <div className='background text-light text-center p-2 mb-1'>mdshahvez24@gmail.com</div>
                <div className='background text-light text-center p-2 mb-1'>8272028781</div>
                <div className='background text-light text-center p-2 mb-1'> Godwin city Muzaffarnagar</div>

                <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="430px" id="gmap_canvas" src="https://maps.google.com/maps?q=Kacchi sadak Police chowki Muzaffarnagar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                </div>
                <div className='col-md-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Contact Us </h5>
                    {
                        show ? <div class="alert alert-success" role="alert">
                            Thanks To Share Your Query With US!!! Our Team Will Contact Your Soon!!!!
                        </div> : ""
                    }
                    <form onSubmit={postData}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" onChange={getData} className="form-control" name="name" placeholder='Enter Name' value={contact.name} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" onChange={getData} className="form-control" name="email" placeholder='Enter Email Id' value={contact.email} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="text" onChange={getData} className="form-control" name="phone" placeholder='Enter Phone Number' value={contact.phone} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Subject</label>
                            <input type="text" onChange={getData} className="form-control" name="subject" placeholder='Enter Subject' value={contact.subject} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea name="message" onChange={getData} className="form-control" rows={5} value={contact.message}></textarea>
                        </div>
                        <button type="submit" className="btn background text-light w-100 btn-sm">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}
