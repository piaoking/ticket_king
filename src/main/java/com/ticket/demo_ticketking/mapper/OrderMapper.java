package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbOrder;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface OrderMapper {
    TbOrder queryOrder(@Param("userId") long userId);
    TbOrder queryOrderById(@Param("orderId") Integer orderId);

    void updateOrderStatus(@Param("orderNum") String orderNum);
}
