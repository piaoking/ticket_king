package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.mapper.AddOrderMapper;
import com.ticket.demo_ticketking.po.TbOrder;
import com.ticket.demo_ticketking.service.AddOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AddOrderServiceImpl implements AddOrderService {

    @Autowired
    private AddOrderMapper addOrderMapper;


    @Override
    public void inserIntoOrder(TbOrder tbOrder) throws Exception {
        addOrderMapper.inserIntoOrder(tbOrder);
    }
}
