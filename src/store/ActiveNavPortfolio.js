import { createSlice } from '@reduxjs/toolkit';

const Dati = ''

const ActiveNavPortfolio = createSlice({

    name: 'ActiveNavPortfolio',
    initialState:{
    value: Dati
    },


    reducers:{

        ChangeActiveRedux: (state, payload) => {
        state.value = payload   
        },

    }

});


export const {ChangeActiveRedux} = ActiveNavPortfolio.actions

export default ActiveNavPortfolio.reducer