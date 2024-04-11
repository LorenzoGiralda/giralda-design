import { createSlice } from '@reduxjs/toolkit';


const ValueLink = {
    toggle: undefined  
    }


const ToggleFilter = createSlice({

    name: 'ToggleFilter',
    initialState:{
    value: ValueLink.toggle 
    },


    reducers:{

        ChangeToggle: (state) => {
        state.value = !state.value    
        },

        changePageToggle: (state) => {
        state.value = undefined   
        },

        changePageToggle2: (state) => {
            state.value = true   
            },

        changePageToggleXl: (state) => {
        state.value = true   
        }
    }

});


export const {ChangeToggle, changePageToggle, changePageToggle2, changePageToggleXl} = ToggleFilter.actions

export default ToggleFilter.reducer