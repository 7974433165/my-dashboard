import { Brightness7, Brightness4, Menu } from "@mui/icons-material";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import { AppBar, Toolbar, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";

const Header = ({ onDrawerToggle }: { onDrawerToggle: () => void }) => {
    const { darkMode, toggleTheme } = useCustomTheme();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar 
            position="fixed" 
            sx={{
                width: "100%", 
                zIndex: 1200,  
                background: darkMode ? 'linear-gradient(to right, #1c1c1c, #333333)' : 'linear-gradient(to right, #5c6bc0, #3f51b5)', // Gradient background
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
                {isSmallScreen && (
                    <IconButton 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu" 
                        onClick={onDrawerToggle}
                        sx={{
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.1)', 
                            },
                        }}
                    >
                        <Menu />
                    </IconButton>
                )}
                <Typography 
                    variant="h6" 
                    sx={{ 
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        marginLeft: isSmallScreen ? 0 : "0px", 
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        color: '#fff',
                    }}
                >
                    <DashboardCustomizeOutlinedIcon sx={{ fontSize: '1.5rem' }} />
                    My Dashboard
                </Typography>
        
                <IconButton 
                    onClick={toggleTheme} 
                    color="inherit" 
                    sx={{
                        transition: 'color 0.3s',
                        '&:hover': {
                            color: theme.palette.secondary.main, 
                        },
                    }}
                >
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
