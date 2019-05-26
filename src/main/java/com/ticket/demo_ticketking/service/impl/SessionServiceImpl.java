package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.SessionMapper;
import com.ticket.demo_ticketking.po.TbSession;
import com.ticket.demo_ticketking.service.ISessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SessionServiceImpl implements ISessionService {
    @Autowired
    private SessionMapper sessionMapper;
    @Override
    public List<TbSession> querySession() {
        List<TbSession> tbSessions = sessionMapper.querySession();
        return tbSessions;
    }

    @Override
    public void saveSession(TbSession tbSession) {
        sessionMapper.saveSession(tbSession);
    }

    @Override
    public TbSession querySessionById(Integer sessionId) {
        TbSession tbSession = sessionMapper.querySessionById(sessionId);
        return tbSession;
    }

    @Override
    public void updateSession(TbSession tbSession)throws Exception {
        if(null!=tbSession){
            sessionMapper.updateSession(tbSession);
        }else{
            throw new UserIdNotFoundException();
        }
    }


}
