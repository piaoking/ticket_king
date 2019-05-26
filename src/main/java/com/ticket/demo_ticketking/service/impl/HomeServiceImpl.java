package com.ticket.demo_ticketking.service.impl;


import com.ticket.demo_ticketking.mapper.HomeMapper;
import com.ticket.demo_ticketking.mapper.UserMapper;
import com.ticket.demo_ticketking.po.TbUser;
import com.ticket.demo_ticketking.service.HomeService;
import com.ticket.demo_ticketking.vo.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeServiceImpl implements HomeService {

    @Autowired
    private HomeMapper homeMapper;

    @Autowired
    private UserMapper userMapper;

    @Override
    public List<City> queryTicketByCity(Integer cityId, String showTime) throws Exception {
        if(cityId == null  && showTime == null  ){
            List<City> cities = homeMapper.queryTicketByCity(1,"2019年06月29日，周六，19:00");
            return cities;
        }else if(showTime == null ){
            List<City> cities2 = homeMapper.queryTicketByCity(cityId, "2019年06月29日，周六，19:00");
            return cities2;
        }else {
            List<City> cities3 = homeMapper.queryTicketByCity(cityId,showTime);
            return cities3;
        }
    }

    @Override
    public TbUser queryUserById(Integer userId) throws Exception {
        TbUser tbUser = userMapper.queryUserById(userId);
        return tbUser;
    }
}