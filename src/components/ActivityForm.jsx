import { Box, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react"

 const ActivityForm=({onActivityAdded})=>{

    const [activity,SetActivity]=useState({
        type: "Running", duration: '', caloriesBurned: '',additionalMetrics:{}
    })

    const handleSubmit=async (e)=>{
    e.preventDefault();
    try{ 
        //await addActivity(activity);
        onActivityAdded();
        SetActivity({type: "Running", duration: '', caloriesBurned: ''})

    }
    catch(error){

    }

}
    return(
        <div>
            <Box component="form" onSubmit={handleSubmit} sx={{ mb:4}}>
            <FormControl fullWidth sx={{mb:2}}>
            <InputLabel>Activity Type</InputLabel>
            <Select
                value={activity.type}
                onChange={(e)=>SetActivity({...activity,type: e.target.value})}></Select>
                <MenuItem value="RUNNING">Running</MenuItem>
                <MenuItem value="WALKING">Running</MenuItem>
                <MenuItem value="CYCLING">Running</MenuItem>

                </FormControl>
                <TextField fullWidth
                            label="Calories Burned"
                            type='number'
                            sx={ {mb:2}}
                            value={activity.caloriesBurned}
                            onChange={(e)=>SetActivity({...activity,caloriesBurned: e.target.value})}/>
                <Button type='submit' variant='contained'>
                    Add activity
                </Button>
                </Box>
        </div>
    )
}

export default ActivityForm;