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

        ChangeToggleView: (state) => {
        state.value = !state.value    
        }
    }

});


export const {ChangeToggleView} = ToggleLight.actions

export default ToggleLight.reducer