import React from 'react';
import './profile.scss'
import {useDispatch, useSelector} from "react-redux";
import {API_URL} from "../../config";

const Profile = () => {
	const dispatch = useDispatch()
	const currentUser = useSelector(state => state.user.currentUser)

	return (
		<div className='profile'>
			<div className='profile_avatar'>
				<img className='profile_avatar_img' src={`${API_URL + currentUser.avatar}`} alt=""/>
				<button className='profile_avatar_delete'>Delete avatar</button>
				<input className='profile_avatar_update' type='file'/>
			</div>
		</div>
	);
};

export default Profile;