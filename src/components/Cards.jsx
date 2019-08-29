import React, { Component } from "react";
import {
  Col,
  CardText,
  CardTitle,
  Button,
  Row,
  Container
} from "reactstrap";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sendData = this.sendData.bind(this);
  }

  sendData(addon) {
    this.props.showModal(addon);
  }

  render() {
    return (
      
        <Container>
          <Row>
          {this.props.api.addons.map(addon => {
          if (this.props.state.addons[addon.name]) {
            return (
              <Col key={addon.id} name={addon.displayName} lg="4">
                <div className="lt-card">
                  {addon.thumbnail ? (
                    <img
                      width="100%"
                      src={
                        "data:image/png;base64," +
                        addon.thumbnail.replace("b'", "").replace("'", "")
                      }
                      alt="Card cap"
                    />
                  ) : null}

                  <div className="lt-card-body">
                    <CardTitle>
                      <h4>{addon.displayName}</h4>
                    </CardTitle>
                    <CardText>{addon.shortDesc} </CardText>
                    <Button onClick={() => this.sendData(addon)}>Button</Button>
                  </div>
                </div>
              </Col>
            );
          }
          return null;
        })}
          </Row>
        </Container>
      
    );
  }
}
