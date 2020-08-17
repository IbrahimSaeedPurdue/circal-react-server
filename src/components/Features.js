import React from 'react';
import {Nav, Navbar, Image, Button, ButtonToolbar, Table, ListGroup} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Card, Tab} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {FeaturesSection} from './FeaturesSection.js';
import {SignUp} from './SignUp.js';
import {Router, Route, Link} from 'react-router-dom';
import SignIn from './SignIn.js';
import '.././App.css';
import '.././css/features.css';
import {GetStartedCard} from './GetStartedCard.js';
import {NavigationBar} from './NavigationBar.js';

const OtherStyle = {
  position: 'absolute',
  zIndex:2,
  left: 0,
  right: 0,
  minWidth: '100%',
  width:'100%'
};

const HeroImageContainer = {
  position: 'absolute',
  top:0,
  left:0,
  zIndex:0,
  width:'100%',
};

const BottomImageContainer = {
  position: 'absolute',
  left: 0,
  right: 0,
  zIndex:0,
};

export class Features extends React.Component {
    render() {
      return (
        <Container fluid>
          <NavigationBar />
          <Container style = {HeroImageContainer} sm = {12} md = {12} fluid>
            <Image src="/assests/PinkGradient.svg" style={HeroImageContainer} fluid/>
            <Container style = {OtherStyle} fluid>
              <Row>
                <Container className = "font header">
                  <Row style = {{display: 'flex', justifyContent: 'center'}}>
                      <h1 className="title header">
                        Features
                      </h1>
                  </Row>

                  <Row>
                    <Col lg = {5} className = "mx-auto">
                      <p className = "paragraph-header">See the features that make Circal so unique.</p> 
                    </Col>
                  </Row>

                  <Row className = "center">
                      <Button variant="outline-light" style = {{width: '20%'}} size = "lg" className = "btn-rounded" href = "/signin">request demo</Button>
                  </Row>
                </Container>
              </Row>

              <Row style = {{display: 'flex', justifyContent: 'center', paddingBottom: '1rem', paddingTop: '30rem'}}>
                    <Col className = "center">
                    <h1 style = {{fontSize: '3rem'}} className = "font grey-title">Product Overview</h1>
                    </Col>
              </Row>

              <Row className="justify-content-md-center">
                <Card style = {{width: '80rem', border: 'hidden', borderRadius: '15px'}} className = "shadow-lg">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                      <Col sm={4} style = {{paddingLeft: '2.5rem', paddingTop: '1rem', paddingBottom: '1rem'}}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Dash Board</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Meeting Creation</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Meeting Specifications</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="fourth">Time Suggestions</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>

                      <Col sm={8} style = {{paddingLeft: '2.5rem', paddingTop: '1rem', paddingBottom: '1rem'}}>
                        <Row className="justify-content-md-center">
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <img width="600" height="400" src="./assests/Dashboard.svg" fluid />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <img width="600" height="400" src="./assests/Success.svg" fluid />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <img width="600" height="400" src="./assests/MeetingSpecification.svg" fluid />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                            <img width="600" height="400" src="./assests/TimeSuggestion.svg" fluid />
                            </Tab.Pane>
                          </Tab.Content>
                        </Row>
                        
                        <Row>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <p style = {{fontSize: '1.2rem', paddingTop: '0.8rem'}} className = "font grey-header">
                              Description of the Dash Board
                            </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <p style = {{fontSize: '1.2rem', paddingTop: '0.8rem'}} className = "font grey-header">
                              Description of the meeting creation
                            </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <p style = {{fontSize: '1.2rem', paddingTop: '0.8rem'}} className = "font grey-header">
                              Description of the meeting specifications
                            </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                            <p style = {{fontSize: '1.2rem', paddingTop: '0.8rem'}} className = "font grey-header">
                              Description of the time suggestion page
                            </p>
                            </Tab.Pane>
                          </Tab.Content>
                        </Row>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Card>
              </Row>

              <Row className="justify-content-md-center" style = {{paddingLeft: '5rem'}}>
                <Col style = {{paddingLeft: '2rem', paddingTop: '9rem'}} sm = {5}>
                  <Row>
                    <h1 style = {{fontSize: '3rem'}} className = "font grey-title">2-Way Sync</h1>
                  </Row>
                  <Row>
                    <p style = {{fontSize: '1.2rem', paddingTop: '0.8rem'}} className = "font grey-header">
                      Circal utilizes 2-way syncing to provide calendar integrations with other services. 
                      iCal, GoogleCal, and Outlook calendars can be imported for efficiency. When a meeting 
                      is accepted, the user’s personal calendar is also updated.
                    </p>
                  </Row>
                  <Row>
                    <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                          <Nav.Link href="/password">Learn about our 2-way sync</Nav.Link>
                        </Nav.Item>
                    </Nav>
                  </Row>

                </Col>
                <Col lg={7} md={12} sm={12} xs={12} style = {{float: 'center', paddingLeft: '5rem', paddingTop: '5rem'}}>
                  <img width="600" height="400" src="./assests/Sync.svg" fluid />
                </Col>
              </Row>

              <Row className="justify-content-md-center" style = {{paddingLeft: '5rem', paddingRight: '6rem', paddingTop: '2rem'}}>
                <Col lg={6} md={12} sm={12} xs={12} style = {{float: 'center', paddingTop: '3rem'}}>
                  <img width="600" height="400" src="./assests/MeetingAgenda.svg" fluid />
                </Col>
                <Col style = {{paddingTop: '8rem', paddingLeft: '4rem'}} sm = {6}>
                  <Row>
                    <h1 style = {{fontSize: '3rem'}} className = "font grey-title">Meeting Agenda</h1>
                  </Row>
                  <Row>
                    <p style = {{fontSize: '1.2rem', paddingTop: '0.8rem'}} className = "font grey-header">
                      Circal includes the option to include meeting agendas for maximized productivity. Pre 
                      meeting agendas encompass a schedule of the upcoming meeting, while post meeting summaries 
                      allow for anonymous feedback on the presenation and the content delivered.
                    </p>
                  </Row>
                  <Row>
                    <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                          <Nav.Link href="/password">Learn about our meeting agenda</Nav.Link>
                        </Nav.Item>
                    </Nav>
                  </Row>

                </Col>
              </Row>

              <Row className="justify-content-md-center" style = {{paddingLeft: '5rem'}}>
                <Col style = {{paddingLeft: '2rem', paddingTop: '12rem'}} sm = {5}>
                  <Row>
                    <h1 style = {{fontSize: '3rem'}} className = "font grey-title">Meeting Statistics</h1>
                  </Row>
                  <Row>
                    <p style = {{fontSize: '1.2rem', paddingTop: '0.8rem'}} className = "font grey-header">
                      NEED A DESCRIPTION.
                    </p>
                  </Row>
                  <Row>
                    <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                          <Nav.Link href="/password">Learn about our meeting statistics</Nav.Link>
                        </Nav.Item>
                    </Nav>
                  </Row>

                </Col>
                <Col lg={7} md={12} sm={12} xs={12} style = {{float: 'center', paddingLeft: '5rem', paddingTop: '7rem'}}>
                  <img width="600" height="400" src="./assests/MeetingStats.svg" fluid />
                </Col>
              </Row>

              <Row className="justify-content-md-center" style = {{paddingLeft: '5rem', paddingRight: '6rem', paddingTop: '2rem'}}>
                <Col lg={6} md={12} sm={12} xs={12} style = {{float: 'center', paddingTop: '3rem'}}>
                  <img width="600" height="400" src="./assests/SmartMeeting.svg" fluid />
                </Col>
                <Col style = {{paddingTop: '8rem', paddingLeft: '4rem'}} sm = {6}>
                  <Row>
                    <h1 style = {{fontSize: '3rem'}} className = "font grey-title">Smart Meeting Scheduling</h1>
                  </Row>
                  <Row>
                    <p style = {{fontSize: '1.2rem', paddingTop: '0.8rem'}} className = "font grey-header">
                      Circal’s smart software largely automates the scheduling process for customer ease. A 
                      manager simply has to select the date, duration, and the key employees; Circal automates 
                      the rest, taking into account all calendars and listing times available for everyone.
                    </p>
                  </Row>
                  <Row>
                    <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                          <Nav.Link href="/password">Learn about our smart meeting scheduling</Nav.Link>
                        </Nav.Item>
                    </Nav>
                  </Row>

                </Col>
              </Row>

              <Row style = {{display: 'flex', justifyContent: 'center', paddingBottom: '1rem', paddingTop: '7rem'}}>
                    <Col className = "center">
                    <h1 style = {{fontSize: '3rem'}} className = "font grey-title">Keep your team on the same page!</h1>
                    </Col>
              </Row>

              <Row>
                <Button variant="primary" style = {{border: 'hidden', width: '15%', fontWeight: 'bold', fontSize: '1.2rem'}} size = "lg" href = "/signup" className = "btn-rounded mx-auto">sign up</Button>
              </Row>

              <Image style = {BottomImageContainer} src = "./assests/Footer.svg"></Image>
            </Container>
            
          </Container>
        </Container>
      );
    }
}

export default Features;
