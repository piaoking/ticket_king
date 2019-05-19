package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.vo.BuyTicketVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface BuyTicketMapper {
    List<BuyTicketVO> queryBuyTicket(@Param("userId") long userId);
}
