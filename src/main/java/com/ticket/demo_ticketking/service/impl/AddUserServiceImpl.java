package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.mapper.AddUserMapper;
import com.ticket.demo_ticketking.service.AddUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddUserServiceImpl implements AddUserService {
    @Autowired
    private AddUserMapper addUserMapper;
    @Override
    public void insertAdd(long userId, String addAdd) throws Exception {
        addUserMapper.insertAdd(userId,addAdd);
    }
}
