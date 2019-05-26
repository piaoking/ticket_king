package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.AddMapper;
import com.ticket.demo_ticketking.po.TbAdd;
import com.ticket.demo_ticketking.service.IAddService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddServiceImpl implements IAddService {
    @Autowired
    private AddMapper addMapper; //地址表
    @Override
    public List<TbAdd> queryAdd() {
        List<TbAdd> tbAdds = addMapper.queryAdd();
        return tbAdds;
    }

    @Override
    public void savaAdd(TbAdd tbAdd) {
        addMapper.savaAdd(tbAdd);
    }

    @Override
    public TbAdd queryAddById(Integer addId) {
        TbAdd tbAdd = addMapper.queryAddById(addId);
        return tbAdd;
    }

    @Override
    public void updateAdd(TbAdd tbAdd) throws Exception{
        if(null!=tbAdd){
            addMapper.updateAdd(tbAdd);
        }else{
            throw new UserIdNotFoundException();
        }

    }
}
