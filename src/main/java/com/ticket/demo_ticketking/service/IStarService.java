package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbStar;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IStarService {
    List<TbStar> queryStar();

    void saveStar(TbStar tbStar);

    TbStar queryStarId(@Param("starId") Integer starId) throws Exception;

    void updatequery(TbStar tbStar) throws Exception;

}
