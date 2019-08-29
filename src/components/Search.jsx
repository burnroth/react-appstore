import { Form, FormGroup, Label, Input } from "reactstrap";

import React, { Component } from 'react'

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Form onChange={this.props.handleSearch}>
      <FormGroup>
        <Label>Label</Label>
        <Input type="search" />
      </FormGroup>
    </Form>
    )
  }
}

export default Search