package com.ticket.demo_ticketking.mapper;


import com.ticket.demo_ticketking.po.TbTicket;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface TicketMapper {
    //商品表
    List<TbTicket> queryTbTicket();

    void savaTbTicket(TbTicket tbTicket);
    /**
     * id查询
     * @param
     * @return
     */
    TbTicket TicketById(@Param("ticketId") Integer ticketId);
    /**
     * 更新
     */
    void updateTicket(TbTicket tbTicket);

}
