package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.mapper.IUserTicketMapper;
import com.ticket.demo_ticketking.po.TbUser;
import com.ticket.demo_ticketking.service.IUserTicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserTicketServiceImpl implements IUserTicketService {

    @Autowired
    private IUserTicketMapper iUserTicketMapper;

    @Override
    public TbUser selectUserTicket(long userId) throws Exception {
        TbUser tbUser = iUserTicketMapper.selectUserTicket(userId);
        return tbUser;
    }

    /*@Override
    public long queryBalance(long userId) throws Exception {
        long blance = iUserTicketMapper.queryBalance(userId);
        return blance;
    }*/
}
