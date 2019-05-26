package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbOrder;

public interface AddOrderService {
    void inserIntoOrder(TbOrder tbOrder) throws Exception;
}
