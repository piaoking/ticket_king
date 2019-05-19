package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbOrder;

public interface OrderService {
    TbOrder queryOrder(long userId) throws Exception;
}
