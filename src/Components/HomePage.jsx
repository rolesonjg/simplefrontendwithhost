import * as React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';


import myImage from '../Images/IMG_1557.JPG'; // Replace with the actual path to your image

const HomePage = () => {
    return (
        <div>
            <center> <h1>This is me Roles</h1></center>

            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" style={{
                    height: "300px", width: "300px",
                    marginLeft: "600px", marginTop: "30px"
                }} src={myImage} />

            </Stack>

        </div>
    )
}

export default HomePage
