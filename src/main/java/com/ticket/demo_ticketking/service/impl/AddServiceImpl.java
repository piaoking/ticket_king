package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.mapper.AddMapper;
import com.ticket.demo_ticketking.service.AddService;
import com.ticket.demo_ticketking.vo.UserAddVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddServiceImpl implements AddService {
    @Autowired
    private AddMapper addMapper;

    @Override
    public List<UserAddVO> queryAdd(long userId) throws Exception {
        List<UserAddVO> UserAddVO = addMapper.queryAdd(userId);
        return UserAddVO;
    }
}
