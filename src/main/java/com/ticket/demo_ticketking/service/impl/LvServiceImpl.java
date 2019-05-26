package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.LvMapper;
import com.ticket.demo_ticketking.po.TbLv;
import com.ticket.demo_ticketking.service.ILvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LvServiceImpl implements ILvService {
    @Autowired
    private LvMapper lvMapper;
    @Override
    public List<TbLv> queryLv() {
        List<TbLv> tbLvs = lvMapper.queryLv();
        return tbLvs;
    }

    @Override
    public void savaLv(TbLv tbLv) {
        lvMapper.savaLv(tbLv);
    }

    @Override
    public TbLv queryLvById(Integer lvId) {
        TbLv tbLv = lvMapper.queryLvById(lvId);
        return tbLv;
    }

    @Override
    public void updateLv(TbLv tbLv) throws Exception {
        if(null!=tbLv){
            lvMapper.updateLv(tbLv);
        }else{
            throw new UserIdNotFoundException();
        }

    }
}
