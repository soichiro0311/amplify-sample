import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MaterialTable from 'material-table';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://mlebl2hvke.execute-api.ap-northeast-1.amazonaws.com/dev/user',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  console.log(data)
  return (
    <div className="App">
      <MaterialTable
        columns={[
          { title: 'ユーザ', field: 'userId' }
        ]}
        data={data}
        options={{
          showTitle: false,
        }}
      />

    </div>
  );
}

export default App;
