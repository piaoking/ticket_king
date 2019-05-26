package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.vo.Ticket;
import com.ticket.demo_ticketking.mapper.TicketMapper;
import com.ticket.demo_ticketking.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    private TicketMapper ticketMapper;

    @Override
    public List<Ticket> queryTicket(Integer cityId, Integer showId, Integer parentId,Integer zan, Integer num, Integer price,Integer pricemin,  String ticketName) throws Exception {
         if (cityId == 0  && showId == 0){
            List<Ticket> tickets6 = ticketMapper.queryTicket(1,1,parentId,zan,num,price,pricemin,ticketName);
            return tickets6;
        }else if ( cityId == 0){
            List<Ticket> tickets1 = ticketMapper.queryTicket(1,showId,parentId,zan,num,price,pricemin,ticketName);
            return tickets1;
        }else if ( showId == 0 ){
            List<Ticket> tickets3 = ticketMapper.queryTicket(cityId,1,parentId,zan,num,price,pricemin,ticketName);
            return tickets3;
        }else {
            List<Ticket> tickets4 = ticketMapper.queryTicket(cityId,showId,parentId,zan,num,price,pricemin,ticketName);
            return tickets4;
        }
    }

    @Override
    public List<Ticket> queryByFour(Integer cityId, Integer showId,Integer parentId) throws Exception {
        if (cityId == 0 && parentId == 0 && showId == 0){
            List<Ticket> tickets = ticketMapper.queryByFour(1,1,1);
            return tickets;
        }else if (cityId == 0  && parentId == 0 ){
            List<Ticket> tickets5 = ticketMapper.queryByFour(1,showId,1);
            return tickets5;
        }else if (cityId == 0  && showId == 0){
            List<Ticket> tickets6 = ticketMapper.queryByFour(1,1,parentId);
            return tickets6;
        }else if (parentId == 0   && showId == 0){
            List<Ticket> tickets7 = ticketMapper.queryByFour(cityId,1,1);
            return tickets7;
        }else if ( cityId == 0){
            List<Ticket> tickets1 = ticketMapper.queryByFour(1,showId,parentId);
            return tickets1;
        }else if ( showId == 0 ){
            List<Ticket> tickets3 = ticketMapper.queryByFour(cityId,1,parentId);
            return tickets3;
        }else {
            List<Ticket> tickets4 = ticketMapper.queryByFour(cityId,showId,parentId);
            return tickets4;
        }
    }

}
