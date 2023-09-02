import './userProfile.css'
import React, { useState } from 'react';
import Avatar from 'react-avatar-edit';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import img from './profile.jpg';


const UserProfile = () => {

  const [image, setImage] = useState('');
  const [imagecrop, setimagecrop] = useState(false);
  const [src, setSrc] = useState(''); // Mettre à jour src
  const [profile, setProfile] = useState([]);
  const [pview, setPview] = useState(false);

  const profileFinal = profile.map((item) => item.pview);

  const onClose = () => {
    setPview(null);
  };

  const onCrop = (view) => {
    setPview(view);
  };

  const saveCropImage = () => {
    setProfile([...profile, { pview }]);
    setimagecrop(false);
  };


  return (
    <div style={{maxWidth:"550px", margin:"0px auto"}}>
        <div style={{
          display:"flex",
          justifyContent:"space-around",
          margin:"18px 0px ",
          borderBottom:"1px solid grey"
        }}>
              <div className="profile_img text-center p-4">
                <div className="ProfilImg">
                  <img
                    onClick={() => setimagecrop(true)}
                    src={profileFinal.length ? profileFinal : img}
                    alt=""
                  />
                  <label htmlFor="" className="mt-3 font-semibold text-5xl"></label>
                  <Dialog
                    visible={imagecrop}
                    header={() => (
                      <p htmlFor="" className="text-2xl font-semibold textcolor">
                        Update profil
                      </p>
                    )}
                    onHide={() => setimagecrop(false)}
                  >
                    <div className="confirmation-content">
                      <Avatar
                        width={500}
                        height={400}
                        onCrop={onCrop}
                        onClose={onClose}
                        src={src} 
                        shadingColor={'#474649'}
                      />
                        <div className="button">
                          <Button
                            onClick={saveCropImage}
                            label="Save"
                            icon="pi pi-check"
                          />
                        </div>
                    </div>
                  </Dialog>

                  <InputText
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file && file.type.substring(0, 5) === 'image') {
                        setImage(file);
                        setSrc(URL.createObjectURL(file)); 
                      } else {
                        setImage(null);
                        setSrc(''); 
                      }
                    }}
                  />
                </div>
              </div>
            <div>
                <h4>ramesh verma</h4>
                <div style={{
                  display:"flex", justifyContent:"space-between", width:"108%"
                }}>
                  <h5>40 posts</h5>
                  <h5>40 followers</h5>
                  <h5>40 following</h5>
                </div>
            </div>
        </div>
        <div className='gallery'>
            <img className='item' src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" />
            <img className='item' src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" />
            <img className='item' src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" />
            <img className='item' src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" />
            <img className='item' src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" />
            <img className='item' src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" />
        </div>
    </div>
  )
}

export default UserProfile





