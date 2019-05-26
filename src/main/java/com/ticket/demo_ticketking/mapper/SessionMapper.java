package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbSession;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface SessionMapper {
    List<TbSession> querySession();
    void saveSession(TbSession tbSession);

    TbSession querySessionById(@Param("sessionId") Integer sessionId);

    void updateSession(TbSession tbSession);
}
