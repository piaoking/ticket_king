package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.mapper.StarMapper;
import com.ticket.demo_ticketking.po.TbStar;
import com.ticket.demo_ticketking.service.StarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StarServiceImpl implements StarService {
    @Autowired
    private StarMapper starMapper;
    @Override
    public List<TbStar> selectStar(int index1, int index2) throws Exception {
        List<TbStar> tbStars = starMapper.selectStar(index1, index2);
        return tbStars;
    }
}
