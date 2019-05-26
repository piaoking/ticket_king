package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.ShowMapper;
import com.ticket.demo_ticketking.po.TbCity;
import com.ticket.demo_ticketking.po.TbShow;
import com.ticket.demo_ticketking.service.IShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowServiceImpl implements IShowService {
    @Autowired
    private ShowMapper showMapper;
    @Override
    public List<TbShow> queryCity() {
        List<TbShow> tbCities = showMapper.queryShow();
        return tbCities;
    }

    @Override
    public void saveShow(TbShow tbShow) {
        showMapper.saveShow(tbShow);
    }

    @Override
    public TbShow queryShowsId(Integer showId) {
        TbShow tbShow = showMapper.queryShowsId(showId);
        return tbShow;
    }

    @Override
    public void updateShows(TbShow tbShow) throws Exception{
        if(null!=tbShow){
            showMapper.updateShows(tbShow);
        }else{
            throw new UserIdNotFoundException();
        }

    }

}
