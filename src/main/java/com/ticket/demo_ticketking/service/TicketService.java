package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.vo.Ticket;

import java.util.List;

public interface TicketService {

    List<Ticket> queryTicket(Integer cityId, Integer showId, Integer parentId, Integer zan, Integer num, Integer price, Integer pricemin, String ticketName) throws Exception;

    List<Ticket> queryByFour(Integer cityId, Integer showId, Integer parentId) throws Exception;

}
