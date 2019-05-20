package com.ticket.demo_ticketking.service;


import com.ticket.demo_ticketking.vo.PayOrderVO;

public interface PayOrderService {
    PayOrderVO payOrder(String orderNum) throws Exception;
}
