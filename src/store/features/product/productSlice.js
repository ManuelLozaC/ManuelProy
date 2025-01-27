import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    initialValue: 10,
    dataProduct:[
        {category:"Frutas", price:"$1", stocked: true, name:"Manzana"},
        {category:"Frutas", price:"$1", stocked: true, name:"Fruta del dragón"},
        {category:"Frutas", price:"$2", stocked: true, name:"Maracuyá"},
        {category:"Frutas", price:"$2", stocked: true, name:"Espinaca"},
        {category:"Frutas", price:"$4", stocked: true, name:"Calabaza"},
        {category:"Frutas", price:"$1", stocked: true, name:"Guisantes"},
    ],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setInitialValue: (state, payload) => {
      state.initialValue =payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setInitialValue } = productSlice.actions
export default productSlice.reducer