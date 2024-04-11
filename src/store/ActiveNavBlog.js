import { createSlice } from '@reduxjs/toolkit';

const Dati = ''

const ActiveNavBlog = createSlice({

    name: 'ActiveNavBlog ',
    initialState:{
    value: Dati
    },


    reducers:{

        ChangeActiveReduxBlog: (state, payload) => {
        state.value = payload   
        },

    }

});


export const {ChangeActiveReduxBlog} = ActiveNavBlog.actions

export default ActiveNavBlog.reducer