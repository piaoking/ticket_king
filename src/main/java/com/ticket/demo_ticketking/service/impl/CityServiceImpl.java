package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.CityMapper;
import com.ticket.demo_ticketking.po.TbCity;
import com.ticket.demo_ticketking.service.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements ICityService {
    @Autowired
    private CityMapper cityMapper;

    @Override
    public List<TbCity> queryCity() {
        List<TbCity> tbCities = cityMapper.queryCity();
        return tbCities;
    }

    @Override
    public void savaCity(TbCity tbCity) {
        cityMapper.savaCity(tbCity);
    }

    @Override
    public TbCity queryCityById(Integer cityId) {

        TbCity tbCity = cityMapper.queryCityById(cityId);
        return tbCity;
    }

    @Override
    public void updateCity(TbCity tbCity) throws Exception{
        if(null!=tbCity){
            cityMapper.updateCity(tbCity);
        }else{
            throw new UserIdNotFoundException();
        }

    }
}
