import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/UI/Card/Card';
import classes from './Profile.module.css';

const Profile = props => {
    return (
        <>
            {/* <Header /> */}
            <main>             
                <Card customClass={ classes.profile_main }> 
                        <div >
                            <h1 className={ classes.profile_h1_title }>Profile</h1>
                            <span className='profile_save_label'>User: UserName</span>
                        </div>                          
                        <div className='profile_save_btn'>Save Button</div>
                </Card>

                <Card customClass={ classes.user_data }>
                    <div className='profile_avatar__container'>
                        <img className='profile_avatar'/>
                        <span>Account</span>
                    </div>
                    <div className='profile_username__container'>
                        <h1 className='profile_username'>User Photo Container</h1>
                        <a className='profile_email' href='email'>email</a>
                    </div>

                    <div className='profile_userdata__container'>
                        <div >
                            <label className='profile_label'>Username</label>
                        </div>
                        <input className='profile_input' type='input' placeholder='Username'/>
                    </div>

                    <div className='profile_userdata__container'>
                        <div >
                            <label className='profile_label'>Email</label>
                        </div>
                        <input className='profile_input' type='input' placeholder='Email'/>
                    </div>

                    <div className='profile_userdata__container'>
                        <div >
                            <label className='profile_label'>Password</label>
                        </div>
                        <input className='profile_input' type='input' placeholder='Password'/>
                    </div>

                    <div className='profile_userdata__container'>
                        <div >
                            <label className='profile_label'>Full Name</label>
                        </div>
                        <input className='profile_input' type='input' placeholder='Fullname'/>
                    </div>

                    <div className='profile_userdata__container'>
                        <div >
                            <label className='profile_label'>Title</label>
                        </div>
                        <input className='profile_input' type='input' placeholder='Title'/>
                    </div>
                </Card>               
            </main>      
        </>
    )
};

export default Profile;