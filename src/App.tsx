import React, { useState, useEffect } from 'react';

function App() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    const response = await fetch('http://localhost:8080/api/results');
    const data = await response.json();
    setResults(data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Game Results</h1>
      <button onClick={fetchResults}>Refresh</button>

      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#333', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Player</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Player Score</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Computer Score</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Winner</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Rounds</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result: any) => (
            <tr key={result.id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{result.playerName}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{result.playerScore}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{result.computerScore}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{result.winner}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{result.rounds}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {new Date(result.gameDate).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
