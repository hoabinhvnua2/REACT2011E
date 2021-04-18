import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function CustomModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [data, setData] = useState({})
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleInput = (e) => {
    console.log(e.target.name)
    setData({...data, })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('tôi đây')
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmitForm}>
        <TextField id="standard-basic" label="Tên TK" name="userName" onInput={handleInput}/>
        <TextField id="standard-basic" label="Họ và tên" />
        <TextField id="standard-basic" label="email" />
        <Button variant="contained" color="primary" type="submit">
          Thêm mới
        </Button>
      </form>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default CustomModal;
