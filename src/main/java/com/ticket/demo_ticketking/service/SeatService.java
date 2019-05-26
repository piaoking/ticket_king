package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbPlace;

public interface SeatService {
    TbPlace querySeat(long placeId) throws Exception;
}
