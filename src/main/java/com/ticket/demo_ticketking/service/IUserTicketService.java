package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbUser;

public interface IUserTicketService {
    TbUser selectUserTicket(long userId) throws Exception;
    /*long queryBalance(long userId) throws Exception;*/
}
