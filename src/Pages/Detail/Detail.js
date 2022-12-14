import React, { useEffect, useState } from 'react';
import './Detail.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Components
import CoinDetail from '../../Components/CoinDetail/CoinDetail';
import HistoryChart from '../../Components/HistoryChart/HistoryChart';
import Converter from '../../Components/Converter/Converter';


function Detail(props) {
    const {id} = useParams();

    const [response,setResponse] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
          setResponse(result.data);
        } catch(err) {
          console.log(err);
        } 
      }

        fetchData();
    },[id])


    return (
        <div className='detail-section'>
            <CoinDetail id={id} response={response}/>
            <HistoryChart id={id} response={response}/>
            <Converter id={id} response={response}/>
        </div>
    );
}

export default Detail;