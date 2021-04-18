import React, {useMemo} from 'react';
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import productAction from "../actions/Product";
import {productSelector} from '../selectors/User';

export const useProduct = () => {
    const users = useSelector(productSelector)
    const dispatch = useDispatch();
    const actions = useMemo(() => bindActionCreators(productAction, dispatch), [dispatch])

    return useMemo(() => ({
        actions,
        users
    }), [actions, users])
}