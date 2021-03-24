import React from 'react';
import SideNavigation from '../SideNavigation.js';
import TopNav from '../TopNav.js';
import { Nav, Navbar, Image, Button, ButtonToolbar, Table, ListGroup, ButtonGroup, Container, Row, Col, CardGroup, Card, Tab, Tabs, Accordion, Form } from 'react-bootstrap';

import ParticipantGroup from './ParticipantGroup.js';
import AgendaCard from './AgendaCard.js';
import { connect } from 'react-redux';
import { DateTimePicker } from 'react-widgets';
import moment from 'moment';

// import MeetingDot from '../../public/assests/MeetingDot.svg';

const OtherStyle = {
  position: 'absolute',
  zIndex: 5,
  left: 0,
  right: 0,
  minWidth: '100%',
  width: '100%'
};

const AgendaDashboard = (props) => {
  return (
    <Container className='dashboard-bg overflow-auto font' fluid>
      <TopNav pageActive='Agenda' />
      <SideNavigation style={{ position: 'fixed' }} activeURL='/my_agendas' />
      <Container className=' centered' style={{ marginLeft: '12%', minWidth: '86vw', paddingTop: '2rem', paddingLeft: '3rem', paddingRight: '2rem' }}>
        <Tabs defaultActiveKey='day1' id='uncontrolled-tab-example'>
          <Tab eventKey='day1' title='Day 1'>
            {props.meetingsData.map((meeting) => {
              const meetingStartTime = moment(meeting.meetingTime, 'hh:mm');
              const meetingEndTime = meetingStartTime.clone().add(meeting.meetingHours, 'hours').add(meeting.meetingMinutes, 'minutes');
              return (
                <Row key={meeting.id} xs={2} md={4} lg={4} className='mx-auto'>
                  <Col className='w-25' style={{ paddingTop: '1.5rem' }}>
                    <h3 className='mx-auto text-center text-muted w-100 rounded-lg pt-5'>{meetingStartTime.format('h:mma')}</h3>
                    <h6 className='mx-auto text-center text-primary w-100 rounded-lg pt-1'>{meetingStartTime.format('h:mma')} - {meetingEndTime.format('h:mma')}</h6>
                  </Col>
                  <Col className='w-75' style={{ paddingTop: '2rem' }}>
                    <AgendaCard
                      meetingTitle={meeting.meetingTitle}
                      meetingNotes={meeting.meetingNotes}
                      meetingRoom='Zoom'
                      idString='1'
                    />
                  </Col>
                </Row>
              );
            })}
            {/*
            <Row xs={2} md={4} lg={4} className='mx-auto'>
              <Col className='w-25' style={{ paddingTop: '1.5rem' }}>
                <h3 className='mx-auto text-center text-muted w-100 rounded-lg pt-5'>10:00am</h3>
                <h6 className='mx-auto text-center text-primary w-100 rounded-lg pt-1'>10:00 - 11:30</h6>
              </Col>
              <Col className='w-75' style={{ paddingTop: '2rem' }}>
                <AgendaCard
                  title='Product Launch'
                  description='Go over product launch plan and discuss any bugs in the product.'
                  meetingRoom='Zoom'
                  idString='1'
                />
              </Col>
            </Row>
            <Row xs={2} md={4} lg={4} className='mx-auto'>
              <Col className='w-25' style={{ paddingTop: '1.5rem' }}>
                <h3 className='mx-auto text-center text-muted w-100 rounded-lg pt-5'>12:00pm</h3>
                <h6 className='mx-auto text-center text-primary w-100 rounded-lg pt-1'>12:00 - 12:30</h6>
              </Col>
              <Col className='w-75' style={{ paddingTop: '2rem' }}>
                <AgendaCard
                  title='Progress Update'
                  description='Quick check in to see progress of project.'
                  meetingRoom='Meeting Room 1'
                  idString='2'
                />
              </Col>
            </Row>
            <Row xs={2} md={4} lg={4} className='mx-auto'>
              <Col className='w-25' style={{ paddingTop: '1.5rem' }}>
                <h3 className='mx-auto text-center w-100 text-muted rounded-lg pt-5'>3:00pm</h3>
                <h6 className='mx-auto text-center w-100 text-primary rounded-lg pt-1'>3:00 - 4:00</h6>
              </Col>
              <Col className='w-75' style={{ paddingTop: '2rem' }}>
                <AgendaCard
                  title='Social Media Pitch'
                  description='Talk about best ways to market product launch.'
                  meetingRoom='Zoom'
                  idString='3'
                />
              </Col>
            </Row> */}
          </Tab>
          <Tab eventKey='day2' title='Day 2'>
            <Tabs defaultActiveKey='account' id='uncontrolled-tab-example' style={{ paddingTop: '2rem' }}>
              <Tab eventKey='account' title='Account'>
                <Row xs={2} md={4} lg={4} className='mx-auto'>
                  <h4 className='w-100 rounded-lg pt-5' style={{ background: 'white', color: 'grey' }} as='h4'>Edit Profile</h4>
                </Row>
                <Row xs={2} md={4} lg={4} className='mx-auto'>
                  <Col lg={2} className='mx-auto'>
                    <img
                      roundedCircle
                      src='./assests/AnishaProfile.png'
                      width='150px'
                      height='150px'
                    />
                  </Col>
                </Row>
                <Row xs={2} md={1} lg={1} className='mx-auto' style={{ paddingTop: '4rem' }}>
                  <Col>
                    <Form className='mx-auto'>
                      <Form.Row>
                        <Col>
                          <Form.Control placeholder='First Name' required />
                        </Col>
                        <Col>
                          <Form.Control placeholder='Last Name' required />
                        </Col>
                      </Form.Row>
                      <Form.Row className='padding'>
                        <Form.Control type='email' placeholder='Email' />
                      </Form.Row>
                      <Form.Row className='padding'>
                        <Form.Control type='contactnum' placeholder="Contact's Number" />
                      </Form.Row>
                      <Form.Row className='padding'>
                        <Form.Control type='password' placeholder='Password' />
                      </Form.Row>
                      <Form.Row className='padding'>
                        <Button variant='primary' style={{ border: 'hidden', width: '40%', fontWeight: 'bold', fontSize: '1.2rem' }} size='lg' href='/user_dashboard' className='btn-rounded mx-auto'>save</Button>
                      </Form.Row>
                    </Form>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey='notifications' title='Notifications' />
              <Tab eventKey='password' title='Password & Security' />
            </Tabs>
          </Tab>
          <Tab eventKey='day3' title='Day 3'>
            <h2>Cool</h2>
          </Tab>
        </Tabs>
      </Container>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    meetingsData: state.meetings
  };
};

export default connect(mapStateToProps)(AgendaDashboard);
