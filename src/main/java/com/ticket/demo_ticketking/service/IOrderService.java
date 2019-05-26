package com.ticket.demo_ticketking.service;


import com.ticket.demo_ticketking.po.TbOrder;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IOrderService {
    List<TbOrder> queryOrder();
    void savaOrder(TbOrder tbOrder);
    TbOrder queryOrderById(@Param("orderId") Integer orderId);
    void  updateOrder(TbOrder tbOrder) throws Exception;
}
