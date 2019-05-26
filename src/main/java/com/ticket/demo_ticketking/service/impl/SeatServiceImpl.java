package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.mapper.SeatMapper;
import com.ticket.demo_ticketking.po.TbPlace;
import com.ticket.demo_ticketking.service.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeatServiceImpl implements SeatService {
    @Autowired
    private SeatMapper seatMapper;
    @Override
    public TbPlace querySeat(long placeId) throws Exception {
        TbPlace tbPlace = seatMapper.querySeat(placeId);
        return tbPlace;
    }
}
