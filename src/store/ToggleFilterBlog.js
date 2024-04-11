import { createSlice } from '@reduxjs/toolkit';


const ValueLink = {
    toggle: true   
    }


const ToggleFilterBlog = createSlice({

    name: 'ToggleFilterBlog',
    initialState:{
    value: ValueLink.toggle 
    },


    reducers:{

        ChangeToggle: (state) => {
        state.value = !state.value    
        }
    }

});


export const {ChangeToggle} = ToggleFilterBlog.actions

export default ToggleFilterBlog.reducer