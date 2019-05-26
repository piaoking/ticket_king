package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.vo.City;
import com.ticket.demo_ticketking.po.TbUser;

import java.util.List;

public interface HomeService {

    List<City> queryTicketByCity(Integer cityId, String showTime) throws Exception;

    TbUser queryUserById(Integer userId) throws Exception;
}
