package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.vo.BuyTicketVO;

import java.util.List;

public interface BuyTicketService {
    List<BuyTicketVO> queryBuyTicket(long userId) throws Exception;
}
