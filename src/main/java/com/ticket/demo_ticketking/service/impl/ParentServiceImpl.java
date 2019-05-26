package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.ParentMapper;
import com.ticket.demo_ticketking.po.TbParent;
import com.ticket.demo_ticketking.service.IParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ParentServiceImpl implements IParentService {
    @Autowired
    private ParentMapper parentMapper;
    @Override
    public List<TbParent> queryParent() {
        List<TbParent> tbParents = parentMapper.queryParent();
        return tbParents;
    }

    @Override
    public void savaParent(TbParent tbParent) {
        parentMapper.savaParent(tbParent);
    }

    @Override
    public TbParent queryParentById(Integer parentId) {
        TbParent tbParent = parentMapper.queryParentById(parentId);
        return tbParent;
    }

    @Override
    public void updateParent(TbParent tbParent)throws Exception {
        if(null!=tbParent){
            parentMapper.updateParent(tbParent);
        }else{
            throw new UserIdNotFoundException();
        }
    }
}
