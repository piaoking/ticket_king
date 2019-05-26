package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.StarMapper;
import com.ticket.demo_ticketking.po.TbStar;
import com.ticket.demo_ticketking.service.IStarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StarServiceImpl implements IStarService {
    @Autowired
    private StarMapper starMapper;
    @Override
    public List<TbStar> queryStar() {
        List<TbStar> tbStars = starMapper.queryStar();
        return tbStars;
    }

    @Override
    public void saveStar(TbStar tbStar) {
        starMapper.saveStar(tbStar);
    }

    @Override
    public TbStar queryStarId(Integer starId) {
        TbStar tbStar = starMapper.queryStarId(starId);
        return tbStar;
    }

    @Override
    public void updatequery(TbStar tbStar) throws Exception{
        if(null!=tbStar){
            starMapper.updatequery(tbStar);
        }else{
            throw new UserIdNotFoundException();
        }

    }


}
