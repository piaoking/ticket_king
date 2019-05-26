package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.mapper.AddOrderMapper;
import com.ticket.demo_ticketking.service.AddOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AddOrderServiceImpl implements AddOrderService {

    @Autowired
    private AddOrderMapper addOrderMapper;
    @Override
    public void inserIntoOrder(long orderPrice, long orderSum, String orderNum, String orderState, String orderTime, String orderTicketName, String orderTicketPlace, String orderTicketTime, String orderTicketImage, long userId) throws Exception {
        addOrderMapper.inserIntoOrder(orderPrice,orderSum,orderNum,orderState,orderTime,orderTicketName,orderTicketPlace,orderTicketTime,orderTicketImage,userId);
    }
}
