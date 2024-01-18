import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name : "counter",
    initialState : {
        cnt : 0,
        value : "",
        data : [
            {
                id : 1,
                name : "Bilol",
                isComplete : false
            },
            {
                id : 2,
                name : "Ahmad",
                isComplete : false
            },
            {
                id : 3,
                name : "Abdurahmon",
                isComplete : false
            }
        ],
        dialogEdit : false,
        inpEditName : "",
        idx : null
    },
    reducers : {
        increment : (state, action) => {
            state.cnt++
        },
        decrement : (state, action) => {
            state.cnt--
        },
        reset : (state, action) => {
            state.cnt += +action.payload
            state.value = ""
        },
        setValue : (state, action) => {
            state.value = action.payload
        },
        deleteUser : (state, action) => {
            state.data = state.data.filter((elem) => elem.id != action.payload)
        },
        addUser : (state, action) => {
            state.data.push(action.payload)
        },
        setDialogEdit : (state, action) => {
            state.dialogEdit = action.payload
        },
        setInpEditName : (state, action) => {
            state.inpEditName = action.payload
        },
        setIdx : (state, action) => {
            state.idx = action.payload
        },
        editShow : (state, action) => {
            state.dialogEdit = true
            state.inpEditName = action.payload.name
            state.idx = action.payload.id
        },
        editUser : (state, action) => {
            state.data = state.data.map((elem) => {
                if (elem.id == state.idx) {
                    elem.name = state.inpEditName
                }
                return elem
            })
            state.dialogEdit = false
        }
    }
})

export const { decrement, increment, reset, setValue, deleteUser, addUser, setDialogEdit, setInpEditName, setIdx, editShow,editUser } = counter.actions

export default counter.reducer