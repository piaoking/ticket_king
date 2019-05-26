package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbLv;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ILvService {
    List<TbLv> queryLv();
    void savaLv(TbLv tbLv);
    TbLv queryLvById(@Param("lvId") Integer lvId);
    void updateLv(TbLv tbLv) throws Exception;
}
