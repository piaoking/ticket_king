package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbCity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CityMapper {
    List<TbCity> queryCity();
    void savaCity(TbCity tbCity);
    TbCity queryCityById(@Param("cityId") Integer cityId);

    void updateCity(TbCity tbCity);
}
