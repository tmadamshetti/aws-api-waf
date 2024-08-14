// src/App.js
import React from 'react';
import PdfUploader from './pdfuploader';

const App = () => {
    return (
        <div className="App">
            <h1>PDF Upload and Process</h1>
            <PdfUploader />
        </div>
    );
};

export default App;

/*import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('YOUR_API_GATEWAY_INVOKE_URL');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;*/
