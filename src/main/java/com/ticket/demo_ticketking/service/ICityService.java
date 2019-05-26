package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbCity;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ICityService {
    List<TbCity> queryCity();
    void savaCity(TbCity tbCity);
    TbCity queryCityById(@Param("cityId") Integer cityId);
    void updateCity(TbCity tbCity) throws Exception;
}
