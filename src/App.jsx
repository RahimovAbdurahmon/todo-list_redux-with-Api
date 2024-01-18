import { Button, TextField } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, getTodos, postTodo, searchTodo } from "./reducer/todo/todo";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Close } from "@mui/icons-material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const App = () => {

  /// modal Add
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [inpAdd, setInpAdd] = useState("")

  /// modal edit
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  let [inpEdit, setInpEdit] = useState("")
  let [idx, setIdx] = useState(null)

  /// modal info
  const [openInfo, setOpenInfo] = React.useState(false);
  const handleOpenInfo = () => setOpenInfo(true);
  const handleCloseInfo = () => setOpenInfo(false);
  let [infoName, setInfoName] = useState("")

  /// search
  let [inpSearch, setInpSearch] = useState("")

  /// dispatch
  const dispatch = useDispatch();

  /// get
  let todos = useSelector((store) => store.todos.todos);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  /// edit
  function editShow(user) {
    handleOpenEdit()
    setInpEdit(user.name)
    setIdx(user.id)
  }

  /// info
  function infoTodo(user) {
    handleOpenInfo()
    setInfoName(user.name)
  }

  return (
    <>
      <div className="flex items-center justify-between p-[20px] lg:p-[50px] xl:px-[150px]">
        <h1 className="text-[30px] font-[600]">Todo List</h1>
        <div className="flex items-center gap-[20px]">
          <TextField label="Search" value={inpSearch} onInput={() => dispatch(searchTodo(inpSearch))} onChange={(event) => setInpSearch(event.target.value)} />
          <Button variant="contained" onClick={handleOpen}>Add New +</Button>
        </div>
      </div>
      <div className="p-[20px] lg:p-[50px] xl:px-[130px]">
        {todos.map((elem) => {
          return (
            <div
              key={elem.id}
              className="p-[20px] flex items-center rounded-[5px] justify-between m-[20px] border-black border-[1px] bg-gray-100"
            >
              <h1 className="text-[20px] font-[600]">{elem.name}</h1>
              <div className="flex items-center gap-[20px]">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => dispatch(deleteTodo(elem.id))}
                >
                  Delete
                </Button>
                <Button variant="contained" color="success" onClick={() => editShow(elem)}>
                  Edit
                </Button>
                <Button variant="contained" color="secondary" onClick={() => infoTodo(elem)}>
                  Info
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      {/* dialog add */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex items-center justify-between mb-[20px]">
              <h1 className="text-[20px] font-[600]">Add User</h1>
              <Button onClick={handleClose}> <Close /> </Button>
            </div>
            <div className="flex flex-col gap-[20px] pr-[20px] items-end">
                <TextField label="Name" value={inpAdd} onChange={(event) => setInpAdd(event.target.value)} fullWidth required/>
                <div className="flex items-center gap-[10px]">
                  <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                  <Button variant="contained" onClick={() => {dispatch(postTodo({name : inpAdd})); handleClose()}}>Add</Button>
                </div>
            </div>
          </Box>
        </Modal>
      </div>
      {/* dialg edit */}
      <div>
        <Modal
          open={openEdit}
          onClose={handleCloseEdit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex items-center justify-between mb-[20px]">
              <h1 className="text-[20px] font-[600]">Edit User</h1>
              <Button onClick={handleCloseEdit}> <Close /> </Button>
            </div>
            <div className="flex flex-col gap-[20px] pr-[20px] items-end">
                <TextField label="Name" value={inpEdit} onChange={(event) => setInpEdit(event.target.value)} fullWidth required/>
                <div className="flex items-center gap-[10px]">
                  <Button variant="outlined" onClick={handleCloseEdit}>Cancel</Button>
                  <Button variant="contained" onClick={() => {dispatch(editTodo({id : idx, name : inpEdit})); handleCloseEdit()}}>Edit</Button>
                </div>
            </div>
          </Box>
        </Modal>
      </div>
      {/* dialg info */}
      <div>
        <Modal
          open={openInfo}
          onClose={handleCloseInfo}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex items-center justify-between mb-[20px]">
              <h1 className="text-[20px] font-[600]">Info User</h1>
              <Button onClick={handleCloseInfo}> <Close /> </Button>
            </div>
            <h1 className="text-[30px] font-[600]"><span className="font-[700]">Name : </span>{infoName}</h1>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default App;
