import React from 'react';
import { Container, Nav, Navbar, Button, Card, Image, CardDeck, Row, Table, Col, Badge, Media } from 'react-bootstrap';
import SideNavigation from '../SideNavigation.js';

import '../dashboard.css';
import TopNav from '../TopNav.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import CalendarHome from './CalendarHome.js';
import Todo from './Todo.js';
import SummaryCard from './SummaryCard.js';
import { Link } from 'react-router-dom';

library.add(faSquareFull);

export class UserDashboard extends React.Component {
  render () {
    return (
      <Container className='dashboard-bg overflow-auto font' fluid>
        <TopNav pageActive='Dashboard' />
        <SideNavigation style={{ position: 'fixed' }} activeURL='/user_dashboard' />
        <Container className='pr-0 mr-0' style={{ marginLeft: '12%', minWidth: '85vw' }}>
          <Row className='clearfix w-100 min-vh-100' style={{ padding: '-15px' }}>
            <Col lg={7} md={12} sm={12} className='pt-5 mx-auto min-vh-100'>
              <CalendarHome />
            </Col>

            <Col className='border-left-divider mr-n5 pr-0 pt-5 min-vh-100' lg={5} md={12} sm={12}>
              <Container className='mr-n5 pt-2 pl-5 w-100 mx-auto'>
                <Row className='mx-auto'>
                  {/* <Button
                    variant='success' style={{ border: 'hidden', color: 'white', width: '40%' }}
                    href='/create_meeting' className='btn-rounded mx-auto'
                  >create meeting +
                  </Button> */}
                  <Link to='/create_meeting'>Create meeting link :D</Link>
                </Row>
                <Row className='mx-auto pt-5 center'>
                  <h5 className='grey-header'>This Week</h5>
                </Row>
                <Row>
                  <SummaryCard meetingCount={0} tasksCount={0} agendasCount={0} />
                </Row>
                <Row className='pt-4'>
                  <Todo />
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default UserDashboard;
