import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import './AddAdminForm.css';


const AddAdminForm = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        console.log("Data-----", data);
        const eventData = {
            email: data.email,
            name: data.adminName,
            position: data.position,
            imageURL: imageURL,
        }

        const url = `http://localhost:5555/addAdmin`;
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
        console.log("image uploading..........", event);
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
        <div className="addAdminArea">
            <h1>Add Admin</h1>
            <form className="formArea section" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input id="inputField1" name="adminName" placeholder="Name" type="text" ref={register} required />
                </div>
                <br />
                <div>
                    <input id="inputField2" type="email" name="email" placeholder="Email" ref={register} required />
                </div>
                <br />
                <div>
                    <input id="inputField3" name="position" placeholder="Position" type="text" ref={register} required />
                </div>
                <br />
                <div>
                    <input onChange={handleImageUpload} type="file" required />
                </div>
                <br />

                <input type="submit" />
            </form>

        </div>
    );
};

export default AddAdminForm;