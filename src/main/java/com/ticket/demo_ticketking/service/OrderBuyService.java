package com.ticket.demo_ticketking.service;


import com.ticket.demo_ticketking.po.TbIntro;
import com.ticket.demo_ticketking.vo.OrderBuyVO;

import java.util.List;

public interface OrderBuyService {
    List<OrderBuyVO> queryPrice(long ticketId, long showId)throws Exception;

    TbIntro selectIntroAll(long ticketId)throws Exception;
}
