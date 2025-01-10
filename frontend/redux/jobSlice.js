import {createSlice} from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        allAdminJobs:[],
        singleJob:null,
        seachJobByText:""
    },
    reducers:{
        setAllJobs:(state,action)=>{
            state.allJobs = action.payload;
        },
        setSingleJob:(state,action)=>{
            state.singleJob = action.payload;
        },
        setAllAdminJobs:(state,action)=>{
            state.allAdminJobs = action.payload;
        },
        setSearchJobByText:(state,action)=>{
            state.seachJobByText=action.payload;
        }
    }
});
export const {setAllJobs,setSingleJob,setAllAdminJobs,setSearchJobByText} = jobSlice.actions;
export default jobSlice.reducer;