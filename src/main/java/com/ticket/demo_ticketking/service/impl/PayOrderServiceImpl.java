package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.mapper.PayOrderMapper;
import com.ticket.demo_ticketking.service.PayOrderService;
import com.ticket.demo_ticketking.vo.PayOrderVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PayOrderServiceImpl implements PayOrderService {
    @Autowired
    private PayOrderMapper payOrderMapper;
    @Override
    public PayOrderVO payOrder(String orderNum) throws Exception {
        PayOrderVO payOrderVO = payOrderMapper.payOrder(orderNum);
        return payOrderVO;
    }
}
