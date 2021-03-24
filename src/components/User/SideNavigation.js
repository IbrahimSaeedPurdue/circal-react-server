import React from 'react';
import { Container, Nav, Navbar, Button, Row, Col, Image } from 'react-bootstrap';
import { SimpleNav } from '.././SimpleNav.js';
import './dashboard.css';
import { faHome, faPeopleCarry, faComment, faCalendar, faStickyNote, faNotesMedical, faEdit, faAddressCard, faColumns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { TransitionGroup } from 'react-transition-group';

import { Link } from 'react-router-dom';

library.add(faHome, faPeopleCarry, faComment, faCalendar, faStickyNote, faNotesMedical, faEdit, faAddressCard, faColumns);

const SideBarStyle = {
  left: '0',
  bottom: '0',
  paddingLeft: '15px',
  width: '13vw',
  position: 'fixed',
  minHeight: '100vh',
  background: 'white',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.02)',
  zIndex: '0'
};

function SideNavigation ({ activeURL }) {
  return (
    <Navbar variant='light' expand='lg' id='navbarSupportedContent' style={SideBarStyle} fluid>
      <Col className='justify-content-right ml-lg-n5'>
        <Row>

          <Navbar.Toggle variant='pills' defaultActiveKey={activeURL} style={{ border: '1px solid white' }} aria-controls='responsive-navbar-nav' disabled>
            <a href='/user_dashboard' style={{ padding: '5px' }}>
              <FontAwesomeIcon className='mx-auto center pink-social' icon={faColumns} variant='pills' defaultActiveKey={activeURL} style={{ color: 'light-grey' }} />
            </a>
          </Navbar.Toggle>
          <Navbar.Collapse className='justify-content-center ml-lg-n5' id='responsive-navbar-nav'>
            <Row style={{ paddingLeft: '96px' }} className='my-auto'>
              <Nav className='flex-column sidebar-links font' variant='pills' defaultActiveKey={activeURL}>
                <Nav.Item className='pb-4'>
                  <Nav.Link href='/user_dashboard'>
                    DASHBOARD
                  </Nav.Link>
                  <Link to='/user_dashboard'>dashboard link</Link>
                </Nav.Item>
              </Nav>
            </Row>
          </Navbar.Collapse>
        </Row>

        <Row>
          <Navbar.Toggle style={{ border: '1px solid white' }} aria-controls='responsive-navbar-nav' variant='pills' defaultActiveKey={activeURL} disabled>
            <a href='/my_team' style={{ padding: '5px' }}>
              <FontAwesomeIcon className='mx-auto center pink-social' icon={faAddressCard} variant='pills' defaultActiveKey={activeURL} style={{ color: 'light-grey' }} />
            </a>
          </Navbar.Toggle>
          <Navbar.Collapse className='justify-content-center ml-lg-n5' id='responsive-navbar-nav'>
            <Row style={{ paddingLeft: '96px' }} className='my-auto'>
              <Nav className='flex-column sidebar-links font' variant='pills' defaultActiveKey={activeURL}>
                <Nav.Item className='pb-4'>
                  <Nav.Link href='/my_team'>
                    TEAM
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
          </Navbar.Collapse>
        </Row>

        <Row>
          <Navbar.Toggle style={{ border: '1px solid white' }} aria-controls='responsive-navbar-nav' variant='pills' disabled>
            <a href='/my_agendas' style={{ padding: '5px' }}>
              <FontAwesomeIcon className='mx-auto center pink-social' icon={faEdit} variant='pills' defaultActiveKey={activeURL} style={{ color: 'light-grey' }} />
            </a>
          </Navbar.Toggle>
          <Navbar.Collapse className='justify-content-center ml-lg-n5' id='responsive-navbar-nav'>
            <Row style={{ paddingLeft: '96px' }} className='my-auto'>
              <Nav className='flex-column sidebar-links font' variant='pills' defaultActiveKey={activeURL}>
                <Nav.Item className='pb-4'>
                  <Nav.Link href='/my_agendas'>
                    AGENDAS
                  </Nav.Link>
                  <Link to='/my_agendas'>agendas link</Link>
                </Nav.Item>
              </Nav>
            </Row>
          </Navbar.Collapse>
        </Row>

        <Row>
          <Navbar.Toggle style={{ border: '1px solid white' }} aria-controls='responsive-navbar-nav' variant='pills' disabled>
            <a href='/my_calendar' style={{ padding: '5px' }}>
              <FontAwesomeIcon className='mx-auto center pink-social' icon={faCalendar} variant='pills' defaultActiveKey={activeURL} style={{ color: 'light-grey' }} />
            </a>
          </Navbar.Toggle>
          <Navbar.Collapse className='justify-content-center ml-lg-n5' id='responsive-navbar-nav'>
            <Row style={{ paddingLeft: '96px' }} className='my-auto'>
              <Nav className='flex-column sidebar-links font' variant='pills' defaultActiveKey={activeURL}>
                <Nav.Item className='pb-5 mb-5'>
                  <Nav.Link href='/my_calendar'>
                    CALENDAR
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
          </Navbar.Collapse>
        </Row>

      </Col>

    </Navbar>
  );
}

export default SideNavigation;
