import { useState} from "react";
import { Button, Modal, Box } from "@mui/material";
import style from "./style";

const SubmitButton = (submitData) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    


    return(
        <div>
        <Button size="large" color="primary" onClick={handleOpen} type="submit">Submit</Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <h3>{`Thanks, ${submitData.props.name}! You're All Signed Up!`}</h3>
                </Box>
            </Modal>
        </div>
    )

}

export default SubmitButton
