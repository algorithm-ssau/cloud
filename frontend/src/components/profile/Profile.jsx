import React, {useState} from 'react';
import './profile.scss'
import {useDispatch, useSelector} from "react-redux";
import {API_URL} from "../../config";
import {deleteAvatar, uploadAvatar} from "../../actions/reg";
import avatarLogo from "../../assets/img/default_avatar.svg";

const Profile = () => {
	const dispatch = useDispatch()
	const currentUser = useSelector(state => state.user.currentUser)
	const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo

	function changeAvatarHandler(event) {
		const file = event.target.files[0]
		dispatch(uploadAvatar(file))
	}

	return (
		<div className='profile'>
			<div className='profile_avatar'>
				<img className='profile_avatar_img' src={avatar} alt=""/>
				<button className='profile_avatar_delete' onClick={()=>dispatch(deleteAvatar())}>Delete avatar</button>
				<input accept='image/*' className='profile_avatar_update' onChange={event=>changeAvatarHandler(event)} type='file'/>
			</div>
		</div>
	);
};

export default Profile;