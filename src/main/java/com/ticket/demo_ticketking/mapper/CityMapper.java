package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbCity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CityMapper {

    List<TbCity> queryCity();

    TbCity queryCityById(@Param("cityId") Integer cityId);
}
