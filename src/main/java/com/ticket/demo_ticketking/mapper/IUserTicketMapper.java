package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbUser;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface IUserTicketMapper {
    TbUser selectUserTicket(@Param("userId") long userId);
   /* void queryBalance(@Param("userId") long userId);*/
}
