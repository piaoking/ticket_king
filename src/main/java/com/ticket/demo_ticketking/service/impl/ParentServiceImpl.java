package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.mapper.ParentMapper;
import com.ticket.demo_ticketking.po.TbParent;
import com.ticket.demo_ticketking.service.ParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParentServiceImpl implements ParentService {

    @Autowired
    private ParentMapper parentMapper;

    @Override
    public List<TbParent> queryParent() throws Exception {
        List<TbParent> tbParents = parentMapper.queryParent();
        return tbParents;
    }
}
