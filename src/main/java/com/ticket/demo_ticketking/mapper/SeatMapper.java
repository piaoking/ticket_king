package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbPlace;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import org.springframework.stereotype.Component;

@Mapper
@Component
public interface SeatMapper {
    TbPlace querySeat(@Param("placeId") long placeId);
}
