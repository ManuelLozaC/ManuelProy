import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    module: 'React Mod7',
    username: '',
    email: '',
    password: 'mod7USIP-MANUEL', // Contraseña almacenada en el slice
  },
  isSubmitted: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    resetForm: (state) => {
      state.formData = {
        module: 'React Mod7',
        username: '',
        email: '',
        password: 'mod7USIP-MANUEL',
      };
      state.isSubmitted = false;
    },
    submitForm: (state, action) => {
      const { username, email } = action.payload;
      state.formData.username = username; // Actualizamos el username
      state.formData.email = email; // Actualizamos el email
      state.isSubmitted = true; // Cambiamos isSubmitted a true
    },
  },
});

// Action creators
export const { updateField, resetForm, submitForm } = formSlice.actions;
export default formSlice.reducer;
