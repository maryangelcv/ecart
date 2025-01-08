import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        // action-name: reducer function
        addToCart: (state,actionByComponent)=>{
            const existingProduct = state.find(items=>items.id==actionByComponent.payload.id)
            if(existingProduct){

            }else{
                state.push({...actionByComponent.payload,quantity:1,totalPrice:actionByComponent.payload.price})
            }
        }
    }
})