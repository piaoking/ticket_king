package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.mapper.BuyTicketMapper;
import com.ticket.demo_ticketking.service.BuyTicketService;
import com.ticket.demo_ticketking.vo.BuyTicketVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuyTicketServiceImpl implements BuyTicketService {
    @Autowired
    private BuyTicketMapper buyTicketMapper;
    @Override
    public List<BuyTicketVO> queryBuyTicket(long userId) throws Exception {
        List<BuyTicketVO> buyTicketVOS = buyTicketMapper.queryBuyTicket(userId);

        return buyTicketVOS;
    }
}
