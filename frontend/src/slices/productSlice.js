import { createSlice } from "@reduxjs/toolkit";


const prodcutSlice = createSlice({
    name : 'product',
    initialState: {
        loading: false,
        product: {}
    },
    reducers: {
        productRequest(state, action){
            return {
                loading: true
            }
        },
        productSuccess(state, action){
            return {
                loading: false,
                product: action.payload.product
            }
        },
        productFail(state, action){
            return {
                loading: false,
                error: action.payload
            }
        }
    }
})

const { actions, reducer } = prodcutSlice;

export const { productRequest, productSuccess, productFail } = actions;

export default reducer;