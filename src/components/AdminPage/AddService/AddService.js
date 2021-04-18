import SideNavBar from '../../BookingPage/SideNavBar/SideNavBar';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import './AddService.css';



const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        console.log("Data-----", data);
        const eventData = {
            name: data.serviceName,
            description: data.serviceDescription,
            price: data.price,
            imageURL: imageURL,
        }

        const url = `https://enigmatic-crag-72285.herokuapp.com/addService`;
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
        console.log("Service image uploading..........", event);
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
            <div className="com-md-3 reviewBack">
                <div>
                    <h1 className="brandTitle pt-3 mb-3">Add Service</h1>
                </div>
                <form className="reviewCardArea section" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input id="inputField1" name="serviceName" placeholder="Service Name" type="text" ref={register} required />
                    </div>
                    <br />
                    <div class="form-group">
                        <textarea id="inputField2" class="form-control" placeholder="Service Description" name="serviceDescription" ref={register} required></textarea>
                    </div>
                    <br />
                    <div>
                        <input id="inputField3" name="price" placeholder="Price" type="text" ref={register} required />
                    </div>
                    <br />
                    <div>
                        <input onChange={handleImageUpload} type="file" required />
                    </div>
                    <br />

                    <input className="brandButton" type="submit" />
                </form>

            </div>
        </div >
    );
};

export default AddService;