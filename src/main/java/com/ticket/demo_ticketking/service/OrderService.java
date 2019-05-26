package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbOrder;

import java.util.List;

public interface OrderService {
    List<TbOrder> queryOrder(long userId) throws Exception;
}
