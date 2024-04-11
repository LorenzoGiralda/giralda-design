import { createSlice } from '@reduxjs/toolkit';


const ValueLink = {
    toggle: true   
    }


const ToggleLight = createSlice({

    name: 'ToggleLight',
    initialState:{
    value: ValueLink.toggle 
    },


    reducers:{

        ChangeToggle: (state) => {
        state.value = !state.value    
        }
    }

});


export const {ChangeToggle} = ToggleLight.actions

export default ToggleLight.reducer