package com.ticket.demo_ticketking.service;


import com.ticket.demo_ticketking.po.TbUser;

public interface IUserService {
     void register(TbUser tbUser) throws Exception;

     void login(String userTel, String userPassword) throws Exception;
     void insertUser(String userTel,String userName);
     void updatePassword(String userPassword,long userId) throws Exception;
}
