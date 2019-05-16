package com.ticket.demo_ticketking.service;


import com.ticket.demo_ticketking.po.TbUser;

public interface IUserService {
     void register(TbUser tbUser) throws Exception;

     void login(String userTel, String userPassword) throws Exception;
}
