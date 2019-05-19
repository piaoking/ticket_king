package com.ticket.demo_ticketking.mapper;


import com.ticket.demo_ticketking.po.TbIntro;
import com.ticket.demo_ticketking.vo.OrderBuyVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface OrderBuyMapper {
    List<OrderBuyVO> queryPrice(@Param("ticketId") long ticketId, @Param("showId") long showId);

    TbIntro selectIntroAll(@Param("ticketId") long ticketId);
}
