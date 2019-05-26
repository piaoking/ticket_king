package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.mapper.OrderMapper;
import com.ticket.demo_ticketking.po.TbOrder;
import com.ticket.demo_ticketking.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
        private OrderMapper orderMapper;

    @Override
    public List<TbOrder> queryOrder(long userId,Integer select) throws Exception {
        List<TbOrder> tbOrders = orderMapper.queryOrder(userId,select);
        return tbOrders;
    }
}
