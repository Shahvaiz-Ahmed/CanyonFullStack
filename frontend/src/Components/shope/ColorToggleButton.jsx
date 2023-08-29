import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useContext,useState } from 'react';
import { UserContext } from '../../../../../../Downloads/Canyon_Full_Stack/canyoncomponents/src/UserContext.jsx';
import { color } from 'framer-motion';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = useState('in');
  const{ isChanged,setIsChanged}= useContext(UserContext);
  let prealignment=null;



 
  const handleChange = (event, newAlignment) => {
    if (newAlignment === alignment) {
 
      return;
    }
  
    // Clicked a different ToggleButton, update the state
    setAlignment(newAlignment);
    setIsChanged(!isChanged);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    
    >
      <ToggleButton value="in" style={{width:'50px',height:'2px',backgroundColor:`${alignment === 'in' ? '#f4976B' : 'white'}`,color:`${alignment === 'in' ? 'white' : 'black'}`}} sx={{textTransform:"lowercase"}}>mm</ToggleButton>
      <ToggleButton value="mm" style={{width:'50px',height:'2px',backgroundColor:`${alignment === 'mm' ? '#f4976B' : 'white'}`,color:`${alignment === 'mm' ? 'white' : 'black'}`}}>in</ToggleButton>
     
    </ToggleButtonGroup>
  );
}