import { Form, FormGroup, Input } from "reactstrap";

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
        <Input placeholder="Sök" type="search" />
      </FormGroup>
    </Form>
    )
  }
}

export default Search