package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.vo.UserAddVO;

import java.util.List;

public interface AddService {
    List<UserAddVO> queryAdd(long userId) throws Exception;
}
