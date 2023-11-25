import React, { useCallback, useEffect, useState } from 'react';
import OpenCss from '../Open/Openbanking.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {CardInfoAPI} from '../APIS/CardApi'
import { setBankCode } from '../Modules/CardSlice';

function CardList() {
  const reqCard = useSelector(state => state.CardInfo);
  
  const dispatch = useDispatch();



  const cardinfoButton = (e) => {
    console.log('Button Clicked bankCode==', e.target.value);

    dispatch(setBankCode(e.target.value))

    dispatch(CardInfoAPI(reqCard));
  }


  return (
    <>
      <h2>카드 정보 조회</h2>
      <button className={OpenCss.button} onClick={cardinfoButton} value='001'>
        국민카드
      </button>
      
      <button className={OpenCss.button} onClick={cardinfoButton} value='002'>
        우리카드
      </button>
      
      <button className={OpenCss.button} onClick={cardinfoButton} value='399'>
        오픈카드
      </button>
      
    </>
  );
}

export default CardList;
