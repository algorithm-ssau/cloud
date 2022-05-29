import React, {useState} from 'react';
import logo from '../../assets/img/Vector.svg'
import avatarLogo from '../../assets/img/default_avatar.svg'
import './header.scss'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";
import {getFiles, searchFile} from "../../actions/file";
import {showLoader} from "../../reducers/loaderReducer";
import {API_URL} from '../../config'

const Header = () => {
		const isAuth = useSelector(state => state.user.isAuth)
		const currentDir = useSelector(state => state.files.currentDir)
		const currentUser = useSelector(state => state.user.currentUser)
		const dispatch = useDispatch()
		const [searchName, setSearchName] = useState('')
		const [searchTimeout, setSearchTimeout] = useState(false)

		const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo


		function setSearchHandler(event) {
			setSearchName(event.target.value)
			if (searchTimeout !== false) {
				clearTimeout(searchTimeout)
			}
			dispatch(showLoader())
			if (event.target.value !== '') {
				setSearchTimeout(setTimeout(() => {
					dispatch(searchFile(event.target.value))
				}, 500, event.target.value))
			} else {
				dispatch(getFiles())
			}
		}

		return (
			<div className='header'>
				<div className="header_logo">
					<NavLink to={'/home'}>
						<img src={logo} alt='' className='header_logo_icon'/>
						<span className="header_logo_title">.cloud</span>
					</NavLink>
					{isAuth ?
						<div className='search_container'><i className="fa-solid fa-magnifying-glass"/>
							<input
								type='text' placeholder='Search...'
								className='navbar_search'
								value={searchName}
								onChange={event => setSearchHandler(event)}/>
						</div> : null}
				</div>
				<div className="navbar">
					{!isAuth && <span className="Home"><NavLink to={'/home'}>Home</NavLink></span>}
					{!isAuth && <span className="Storage"><NavLink to='/login'>Storage</NavLink></span>}
					{isAuth && <span className="hello_title">Hello, <b className='color_name'>{currentUser.name}</b></span>}
					{isAuth && <NavLink to='/profile'>
						<img className="navbar_avatar" src={avatar} alt=""/>
					</NavLink>}
				</div>
			</div>
		);
	}
;

export default Header;