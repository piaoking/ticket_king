package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbCity;

import java.util.List;

public interface CityService {

    List<TbCity> queryCity() throws Exception;

    TbCity queryCityById(Integer cityId) throws Exception;
}
