package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.TicketMapper;
import com.ticket.demo_ticketking.po.TbTicket;
import com.ticket.demo_ticketking.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketServiceImpl implements ITicketService {
    @Autowired
    private TicketMapper ticketMapper;


    //商品表
    @Override
    public List<TbTicket> queryTbTicket() {
        List<TbTicket> tbTickets = ticketMapper.queryTbTicket();
        return tbTickets;
    }

    @Override
    public void savaTbTicket(TbTicket tbTicket) {

        ticketMapper.savaTbTicket(tbTicket);
    }

    /**
     * id查找
     * @param ticketId
     * @return
     */
    @Override
    public TbTicket TicketById(Integer ticketId) {
        TbTicket tbTicket = ticketMapper.TicketById(ticketId);
        return tbTicket;
    }

    @Override
    public void updateTicket(TbTicket tbTicket)throws Exception {
        if(null!=tbTicket){
            ticketMapper.updateTicket(tbTicket);
        }else{
            throw new UserIdNotFoundException();
        }

    }



}
