package com.ticket.demo_ticketking.mapper;


import com.ticket.demo_ticketking.vo.City;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface HomeMapper {

    List<City> queryTicketByCity(@Param("cityId") Integer cityId, @Param("showTime") String showTime);
}
