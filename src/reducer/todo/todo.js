import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let API = "http://localhost:3000/data";

/// get
export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  try {
    let { data } = await axios.get(API);
    return data;
  } catch (error) {
    console.log(error);
  }
});

/// delete
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, { dispatch }) => {
    try {
      let { data } = await axios.delete(`${API}/${id}`);
      dispatch(getTodos());
      return { id, data };
    } catch (error) {
      console.log(error);
    }
  }
);

/// post
export const postTodo = createAsyncThunk(
  "todos/postTodo",
  async (obj, { dispatch }) => {
    try {
      let { data } = await axios.post(API, {
        name: obj.name,
        isComplete: false,
      });
      dispatch(getTodos());
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

/// edit
export const editTodo = createAsyncThunk(
  "todos/editTodos",
  async ({ id, name }, { dispatch }) => {
    try {
      let { data } = await axios.put(`${API}/${id}`, { name });
      dispatch(getTodos());
    } catch (error) {
      console.log(error);
    }
  }
);

/// search
export const searchTodo = createAsyncThunk(
  "todos/searchTodo",
  async (searchValue) => {
    try {
      let { data } = await axios.get(`${API}?q=${searchValue}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const todoList = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    /// get
    builder.addCase(getTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.isLoading = false;
    });

    /// delete
    builder.addCase(deleteTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.isLoading = false;
    });

    /// post
    builder.addCase(postTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postTodo.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(postTodo.rejected, (state, action) => {
      state.isLoading = false;
    });

    /// edit
    builder.addCase(editTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editTodo.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(editTodo.rejected, (state, action) => {
      state.isLoading = false;
    });

    /// search
    builder.addCase(searchTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(searchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(searchTodo.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default todoList.reducer;
