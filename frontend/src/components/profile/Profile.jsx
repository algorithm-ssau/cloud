import React, {useState} from 'react';
import './profile.scss'
import {useDispatch, useSelector} from "react-redux";
import {API_URL} from "../../config";
import {deleteAvatar, uploadAvatar} from "../../actions/reg";
import avatarLogo from "../../assets/img/default_avatar.svg";
import {logout} from "../../reducers/userReducer";

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
				<div className="profile_avatar_btns">
				<button className='profile_avatar_delete' onClick={() => dispatch(deleteAvatar())}><i
					className="fa-solid fa-trash"/></button>
				<label htmlFor="profile_avatar_update" className="profile_avatar_update-label"><i
					className="fa-solid fa-pen"/></label>
				</div>
				<img className='profile_avatar_img' src={avatar} alt=""/>

				<input accept='image/*' className='profile_avatar_update' onChange={event => changeAvatarHandler(event)} type="file"
				       id="profile_avatar_update"/>
			</div>
			<div className='profile_name'>{currentUser.name + ' ' + currentUser.surname}</div>
			<span className="profile_logout" onClick={() => dispatch(logout())}>Log out</span>
		</div>
	);
};

export default Profile;