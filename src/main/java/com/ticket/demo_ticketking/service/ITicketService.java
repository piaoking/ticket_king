package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbTicket;
import org.apache.ibatis.annotations.Param;

import java.io.IOException;
import java.util.List;

public interface ITicketService {
    //商品表
    List<TbTicket> queryTbTicket();
    //添加
    void savaTbTicket(TbTicket tbTicket) throws IOException;
    /**
     * id查询
     * @param
     * @return
     */
    TbTicket TicketById(@Param("ticketId") Integer ticketId);
    /**
     * 更新
     */
    void updateTicket(TbTicket tbTicket) throws Exception;


}
