import { createSlice } from '@reduxjs/toolkit';


const Dati = ''

const DatiBlogHome = createSlice({

    name: 'DatiBlogHome',
    initialState:{
    value: Dati.categoria
    },


    reducers:{

        ChangeStateBlogHome: (state, payload) => {
        state.value = payload   
        },

    }

});


export const {ChangeStateBlogHome} = DatiBlogHome.actions

export default DatiBlogHome.reducer