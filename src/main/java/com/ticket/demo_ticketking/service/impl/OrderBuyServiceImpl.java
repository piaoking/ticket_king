package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.mapper.OrderBuyMapper;
import com.ticket.demo_ticketking.po.TbIntro;
import com.ticket.demo_ticketking.service.OrderBuyService;
import com.ticket.demo_ticketking.vo.OrderBuyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OrderBuyServiceImpl implements OrderBuyService {
    @Autowired
    private OrderBuyMapper orderBuyMapper;

    @Override
    public List<OrderBuyVO> queryPrice(long ticketId, long showId) throws Exception {
        List<OrderBuyVO> orderBuyVOS = orderBuyMapper.queryPrice(ticketId, showId);
        return orderBuyVOS;
    }

    @Override
    public TbIntro selectIntroAll(long ticketId) throws Exception {
        TbIntro tbIntro = orderBuyMapper.selectIntroAll(ticketId);
        return tbIntro;
    }
}
