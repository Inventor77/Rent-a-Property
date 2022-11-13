import React from "react";
import {
	Container,
	Typography,
	IconButton,
	OutlinedInput,
	InputAdornment,
	FormControl,
} from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import "./SubHeader.scss";

function SubHeader() {
	return (
		<Container className='subHeader' disableGutters>
			<Typography variant='h3' className='heading'>
				Search properties to rent
			</Typography>
			<FormControl
				sx={{
					m: 1,
					width: "272px",
					background: "#FFFFFF",
					borderRadius: "12px",
				}}
				size='small'
				variant='outlined'>
				<OutlinedInput
					placeholder='Search with Search Bar'
					type={"text"}
					sx={{
						borderRadius: "12px",
						padding: "3px 12px",
					}}
					// value={}
					// onChange={handleChange}
					endAdornment={
						<InputAdornment position='end'>
							<IconButton
								size='small'
								edge='end'
								sx={{ background: "#E5E3FD" }}>
								<ExpandMoreRoundedIcon
									sx={{ fontSize: "medium" }}
									color='primary'
								/>
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>
		</Container>
	);
}

export default SubHeader;
