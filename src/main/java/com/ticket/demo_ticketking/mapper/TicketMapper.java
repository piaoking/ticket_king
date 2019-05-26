package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.vo.Ticket;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface TicketMapper {

    List<Ticket> queryTicket(@Param("cityId") Integer cityId, @Param("showId") Integer showId,
                             @Param("parentId") Integer parentId, @Param("zan") Integer zan,
                             @Param("num") Integer num, @Param("price") Integer price,
                             @Param("pricemin") Integer pricemin, @Param("ticketName") String ticketName);


    List<Ticket> queryByFour(@Param("cityId") Integer cityId, @Param("showId") Integer showId, @Param("parentId") Integer parentId);
}