package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.FocusMapper;
import com.ticket.demo_ticketking.po.TbFocus;
import com.ticket.demo_ticketking.service.IFocusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FocusServiceImpl implements IFocusService {
    @Autowired
    private FocusMapper focusMapper;

    @Override
    public List<TbFocus> queryFocus() {
        List<TbFocus> tbFoci = focusMapper.queryFocus();
        return tbFoci;
    }

    @Override
    public void savaFocus(TbFocus tbFocus) {
        focusMapper.savaFocus(tbFocus);
    }

    @Override
    public TbFocus queryFocusById(Integer focusId) {
        TbFocus tbFocus = focusMapper.queryFocusById(focusId);
        return tbFocus;
    }

    @Override
    public void upateFocus(TbFocus tbFocus)throws Exception {
        if(null!=tbFocus){
            focusMapper.upateFocus(tbFocus);
        }else{
            throw new UserIdNotFoundException();
        }

    }
}
