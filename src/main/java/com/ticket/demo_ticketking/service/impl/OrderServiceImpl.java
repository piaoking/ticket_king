package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.mapper.OrderMapper;
import com.ticket.demo_ticketking.po.TbOrder;
import com.ticket.demo_ticketking.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
        private OrderMapper orderMapper;
    @Override
    public TbOrder queryOrder(long userId) throws Exception {
        TbOrder tbOrder = orderMapper.queryOrder(userId);
        return tbOrder;
    }

    @Override
    public TbOrder queryOrderById(Integer orderId) throws Exception {
        TbOrder tbOrder = orderMapper.queryOrderById(orderId);
        return tbOrder;
    }
}
