import React from 'react';
import { Col, Table, Spinner } from 'react-bootstrap';

import axios from '../utils/axios';

export default function VoucherResults() {
  const [results, setResults] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  async function fetchResults() {
    try {
      const response = await axios.get('/api/v1/unemployed');
      const data = await response.data;
      setResults(data.unemployeds);
      setLoading(false);
    } catch (error) {
      console.error(error.response);
    }
  }

  React.useEffect(() => {
    fetchResults();
  });

  return (
    <Col>
      <Col className={'d-flex justify-content-center'}>
        <Col className={'col-8'}>
          {!loading ? (
            <>
              {results[0].status !== 'pending' ? (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>AMKA</th>
                      <th>POINTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((application) => {
                      return (
                        <tr key={application.amka}>
                          <td>{application.amka}</td>
                          <td>{application.points}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              ) : (
                <>
                  <br />
                  <br />
                  <h4 className={'intro-text'}>
                    Results are not published yet. Be patient and try again later or contact the customer service
                    department.
                  </h4>
                </>
              )}
            </>
          ) : (
            <div className={'d-flex justify-content-center'}>
              <Spinner animation='border' role='status' />
            </div>
          )}
        </Col>
      </Col>
    </Col>
  );
}
