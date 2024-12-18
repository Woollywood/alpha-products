import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { convertSearchParamsToStr, getExistingSearchParams } from '@/utils';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

const pages: { label: string; to: string }[] = [
	{ label: 'Products', to: '/products' },
	{ label: 'Add', to: '/create-product' },
];

export const Header: React.FC = () => {
	const [searchParams] = useSearchParams();
	const searchTerm = searchParams.get('s') || '';
	const [searchText, setSearchText] = useState(searchTerm);

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const navigate = useNavigate();
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (event.code === 'Enter') {
			const otherParams = convertSearchParamsToStr(getExistingSearchParams(searchParams), ['s']);
			const otherStr = otherParams.length > 0 ? `&${otherParams}` : '';

			navigate({
				pathname: '/products',
				search: `?s=${searchText}${otherStr}`,
			});
		}
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed' className='h-[var(--header-height)]'>
				<Toolbar className='h-full'>
					<Link to='/'>
						<Typography variant='h6' noWrap component='div'>
							Logo
						</Typography>
					</Link>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder='Search…'
							inputProps={{ 'aria-label': 'search' }}
							value={searchText}
							onChange={(e) => setSearchText(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
					</Search>
					<Box sx={{ flexGrow: 1 }} />
					{pages.map(({ label, to }) => (
						<MenuItem key={to}>
							<Link to={to}>
								<Typography sx={{ textAlign: 'center' }}>{label}</Typography>
							</Link>
						</MenuItem>
					))}
					<Box>
						<IconButton size='large' aria-label='show 4 new mails' color='inherit'>
							<Badge badgeContent={4} color='error'>
								<MailIcon />
							</Badge>
						</IconButton>
						<IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
							<Badge badgeContent={17} color='error'>
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<IconButton
							size='large'
							edge='end'
							aria-label='account of current user'
							aria-controls={menuId}
							aria-haspopup='true'
							onClick={handleProfileMenuOpen}
							color='inherit'>
							<AccountCircle />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMenu}
		</Box>
	);
};
