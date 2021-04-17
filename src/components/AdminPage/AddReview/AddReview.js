import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import SideNavBar from '../../BookingPage/SideNavBar/SideNavBar';
import './AddReview.css';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    // const [info, setInfo] = useState({});
    // const [file, setFile] = useState(null);
    // let history = useHistory({})

    // const handleBlur = e => {
    //     const newInfo = { ...info };
    //     newInfo[e.target.name] = e.target.value;
    //     setInfo(newInfo);
    // }

    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }

    // const handleSubmit = () => {
    //     const formData = new FormData()
    //     // console.log(info);
    //     formData.append('file', file);
    //     formData.append('name', info.name);
    //     formData.append('email', info.email);
    //     formData.append('country', info.country);
    //     formData.append('reviewDescription', info.reviewDescription);

    //     fetch('http://localhost:5555/addReview', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    //     console.log({ formData });
    //     //history.push('/home');
    // }

    const onSubmit = data => {
        console.log("Data-----", data);
        const eventData = {
            name: data.name,
            email: data.email,
            description: data.reviewDescription,
            country: data.country,
            imageURL: imageURL,
        }

        const url = `http://localhost:5555/addReview`;
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                console.log("server side response........", res);
            })

        document.getElementById('inputField1').value = '';
        document.getElementById('inputField2').value = '';
        document.getElementById('inputField3').value = '';
    };

    const handleImageUpload = event => {
        console.log("User image uploading..........", event);
        const imageData = new FormData();
        imageData.set('key', '651cd2d556176d579184fce70268ab3a');
        imageData.append('image', event.target.files[0]);
        console.log("Image: ", event.target.files[0]);


        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="row d-flex">
            <div className="col-md-3">
                <SideNavBar></SideNavBar>
            </div>
            <div className="col-md-9">
                <h1>Add Review by user</h1>
                <div className="reviewCardArea">
                    {/* <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Name" />
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter Email" />
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="country" placeholder="Enter Country Name" />
                        </div>

                        <div class="form-group">
                            <textarea onBlur={handleBlur} class="form-control" placeholder="Enter Your Review" name="reviewDescription"></textarea>
                        </div>

                        <div className="form-group">
                            <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Upload Your Picture" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form> */}
                    <form className="formArea section" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input id="inputField1" name="name" placeholder="Name" type="text" ref={register} required />
                    </div>
                    <br />
                    <div>
                        <input id="inputField2" name="email" placeholder="Email" type="email" ref={register} required />
                    </div>
                    <br />
                    <div>
                        <input id="inputField3" name="country" placeholder="Country" type="text" ref={register} required />
                    </div>
                    <br />
                    <div class="form-group">
                        <textarea id="inputField4" class="form-control" placeholder="Review Description" name="reviewDescription" ref={register} required></textarea>
                    </div>
                    
                    <br />
                    <div>
                        <input onChange={handleImageUpload} type="file" required />
                    </div>
                    <br />

                    <input type="submit" />
                </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;