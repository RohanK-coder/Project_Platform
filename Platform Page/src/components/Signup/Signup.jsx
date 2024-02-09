import React from 'react'
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Tabs from '../Tabs/TabsInside'
export default function Signup() {
  const [value, setValue] = React.useState("react");
  return (
    <>
    
    
    <div className='sign'>
      <div className='sign1'>SmartVillage.GENAI</div>
      <div className='sign2'>Smart Village Movement Platform is a dynamic digital space where academia, government and corporations, startups and multinationals, come together to Co-innovate to solve grand challenges of rural emerging economies.
It is this co-Innovation environment and a spirit of collaboration which accelerates problem finding and solving challenges in rural economies.</div><br /> 
      <div className='sign3'><br /><span>Be a Changemaker</span> <br />
<span>Join us to be a part of the solution.</span><br />
Sign up on UC Berkeley - Smart Village Movement Platform and participate
in understanding and solving real world problems.</div>
      </div>
      
      <div className='dropdown-select'>
      <div>
      <Select
        label="Select Persona"
        value={value}
        onChange={(val) => setValue(val)} 
      >
        <Option value="html">Business</Option>
        <Option value="react">University</Option>
        <Option value="vue">Government</Option>
        <Option value="angular">Volunteer</Option>
        <Option value="svelte">Non-Profit Organization</Option>
      </Select>
      </div>
      <div>
      <Select
        label="Select Region"
        value={value}
        onChange={(val) => setValue(val)}
      >
        <Option value="html">Andhra Pradesh</Option>
        <Option value="react">Arunachal Pradesh</Option>
        <Option value="vue">Gujarat</Option>
        <Option value="angular">Meghalaya</Option>
        
      </Select>
      </div>
      <div>
      <Select
        label="Select Sectors"
        value={value}
        onChange={(val) => setValue(val)}
      >
        <Option value="html">Agriculture</Option>
        <Option value="react">Healthcare</Option>
        <Option value="vue">Transportation</Option>
        <Option value="angular">Water and Sanitation</Option>
        <Option value="svelte">Connectivity</Option>
        <Option value="svelte">Education</Option>
        <Option value="svelte">Energy</Option>
        <Option value="svelte">Livelihood</Option>
      </Select>
      </div>
      <Button color="blue">Continue</Button>
      </div>
      <Tabs/>
    


    
    </>
  )
}
