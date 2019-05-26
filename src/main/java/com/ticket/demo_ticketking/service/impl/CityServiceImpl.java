package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.mapper.CityMapper;
import com.ticket.demo_ticketking.po.TbCity;
import com.ticket.demo_ticketking.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    private CityMapper cityMapper;

    @Override
    public List<TbCity> queryCity() throws Exception {
        List<TbCity> tbCities = cityMapper.queryCity();

        return tbCities;
    }

    @Override
    public TbCity queryCityById(Integer cityId) throws Exception{
        TbCity tbCity = cityMapper.queryCityById(cityId);
        return tbCity;
    }
}
