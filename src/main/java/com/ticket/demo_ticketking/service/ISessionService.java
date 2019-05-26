package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbSession;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ISessionService {
    List<TbSession> querySession();
    void saveSession(TbSession tbSession);

    TbSession querySessionById(@Param("sessionId") Integer sessionId);

    void updateSession(TbSession tbSession) throws Exception;
}
