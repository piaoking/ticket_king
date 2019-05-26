package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbOrder;

public interface WxpayService {

    String orderWx(String orderNum, String orderTicketName, String baseURL)throws Exception;

    void orderAfterPay(String orderNum, Long userId) throws Exception;

    String order(TbOrder tbOrder, String baseURL, Long userId) throws Exception;
}
