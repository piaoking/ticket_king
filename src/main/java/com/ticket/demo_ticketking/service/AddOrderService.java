package com.ticket.demo_ticketking.service;

public interface AddOrderService {
    void inserIntoOrder(long orderPrice, long orderSum, String orderNum, String orderState, String orderTime,String orderTicketName,String orderTicketPlace,String orderTicketTime,String orderTicketImage,long userId) throws Exception;
}
