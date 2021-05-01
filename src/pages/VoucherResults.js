import React from 'react';
import { Spinner } from 'react-bootstrap';

import axios from '../utils/axios';

export default function VoucherResults() {
  const [results, setResults] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  async function fetchResults() {
    try {
      const response = await axios.get('/api/v1/unemployed?sort=-points');
      const data = await response.data;
      setResults(data.data);
      setLoading(false);
    } catch (error) {
      console.error(error.response);
    }
  }

  React.useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div>
      <div className={'flex justify-center'}>
        <div className={'col-8'}>
          {!loading ? (
            <>
              {results.length > 0 && results[0].status !== 'pending' ? (
                <table>
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
                </table>
              ) : (
                <div className='font-semibold text-2xl pt-20'>
                  Results are not published yet. Be patient and try again later or contact the customer service
                  department.
                </div>
              )}
            </>
          ) : (
            <div className={'flex justify-center'}>
              <Spinner animation='border' role='status' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
