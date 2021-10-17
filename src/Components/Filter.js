import React from 'react'
import {  Form, FormGroup, Label, Input } from 'reactstrap';

const Filter = ({onChange}) => {

    return (
        <div >
     <Form className="filter">
        <FormGroup className="input">
        <Label for="search">Select</Label>
           <Input  type="search" name="search" id="search" onChange={onChange} placeholder="Search for a country" />
        </FormGroup>
         <FormGroup className="input">
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option> 
          <option value="Oceania">Oceania</option> 
      
        </Input>
      </FormGroup>
     </Form>
        </div>
    )
}

export default Filter
