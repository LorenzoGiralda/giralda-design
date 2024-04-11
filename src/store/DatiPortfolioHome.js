import { createSlice } from '@reduxjs/toolkit';


const Dati = ''

const DatiPortfolioHome = createSlice({

    name: 'DatiPortfolioHome',
    initialState:{
    value: Dati.categoria
    },


    reducers:{

        ChangeState: (state, payload) => {
        state.value = payload   
        },

    }

});


export const {ChangeState} = DatiPortfolioHome.actions

export default DatiPortfolioHome.reducer