import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

function SummaryCard ({ meetingCount, tasksCount, agendasCount }) {
  return (
    <Card className='dashboard-small-card mx-auto'>
      <Card.Text className='my-auto'>
        <Row className='center mx-auto pt-3 grey-header'>
          <Row className='w-100'>
            <Col lg={4} className='border-right-divider'>
              <h5 className='center mx-auto'>{meetingCount}</h5>
            </Col>
            <Col lg={4} className='border-right-divider'>
              <h5 className='center mx-auto'>{tasksCount}</h5>
            </Col>
            <Col lg={4}>
              <h5 className='center mx-auto'>{agendasCount}</h5>
            </Col>
          </Row>
          <Row className='w-100 pt-0 mt-n2'>
            <Col lg={4} className='border-right-divider'>
              <p className='center mx-auto'>meetings</p>
            </Col>
            <Col lg={4} className='border-right-divider'>
              <p className='center mx-auto'>tasks</p>
            </Col>
            <Col lg={4}>
              <Button variant='link' className='center mx-auto pt-0' style={{ color: 'grey' }} href='/my_agendas'><p>agendas</p></Button>
            </Col>
          </Row>
        </Row>
      </Card.Text>
    </Card>
  );
}

export default SummaryCard;
