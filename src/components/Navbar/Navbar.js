import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.success('Logged out successfully');
        navigate('/login')
    };

    const handleNavigate = (path) => {
        if (localStorage.getItem('token')) {
            navigate(path);
        } else {
            toast.error('Please log in first');
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        All Items
                    </Typography>
                    <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
                    <Button color="inherit" onClick={() => handleNavigate("/create")}>Create</Button>
                    <Button color="inherit" onClick={() => handleNavigate("/save")}>Save</Button>
                    {localStorage.getItem('token') ? (
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    ) : (
                        <Button color="inherit" onClick={() => navigate("/login")}>SignIn/SignUp</Button>
                    )}
                </Toolbar>
            </AppBar>
            <ToastContainer position="bottom-center" autoClose={3000} />

        </Box>
    );
};

export default Navbar;
