package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbOrder;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface IOrdersMapper {
    List<TbOrder> queryOrder();
    void savaOrder(TbOrder tbOrder);
    TbOrder queryOrderById(@Param("orderId") Integer orderId);
    void  updateOrder(TbOrder tbOrder);
}
