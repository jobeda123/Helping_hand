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

    //     fetch('https://enigmatic-crag-72285.herokuapp.com/addReview', {
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

        const url = `https://enigmatic-crag-72285.herokuapp.com/addReview`;
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
            <div className="col-md-9 reviewBack">
                <div>
                <h1 className="pt-3 mb-3 brandTitle">Add Review</h1>
                </div>
                <div className="reviewCardArea">
                    <form className="section" onSubmit={handleSubmit(onSubmit)}>
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
                        <input onChange={handleImageUpload}  type="file" required />
                    </div>
                    <br />

                    <input className="brandButton" type="submit" />
                </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;