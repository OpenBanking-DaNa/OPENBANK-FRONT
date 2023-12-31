import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import OpenCss from './Openbanking.module.css';
import Openbanking_card from './Openbanking_card';
import Openbanking_bank from './Openbanking_bank';
import CardList from '../Card/CardList';

function Openbanking() {

    // const loginMember = useSelector(state => state.auth);
    // console.log("Openbanking - loginMember", loginMember);

    return (
        <>
            <Openbanking_bank/>
            <Openbanking_card/>
            <CardList/>
        </>
    );
}

export default Openbanking;