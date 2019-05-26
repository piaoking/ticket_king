package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.IntroMapper;
import com.ticket.demo_ticketking.po.TbIntro;
import com.ticket.demo_ticketking.service.IIntroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IntroServiceImpl implements IIntroService {
    @Autowired
    private IntroMapper introMapper;
    @Override
    public List<TbIntro> queryIntro() {
        List<TbIntro> tbIntros = introMapper.queryIntro();
        return tbIntros;
    }

    @Override
    public void saveIntro(TbIntro tbIntro) {
        introMapper.saveIntro(tbIntro);
    }

    @Override
    public TbIntro queryIntroById(Integer introId) {
        TbIntro tbIntro = introMapper.queryIntroById(introId);
        return tbIntro;
    }

    @Override
    public void updateIntro(TbIntro tbIntro) throws Exception{
        if(null!=tbIntro){
            introMapper.updateIntro(tbIntro);
        }else{
            throw new UserIdNotFoundException();
        }
    }
}
