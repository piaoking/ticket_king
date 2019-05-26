package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbOrder;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface AddOrderMapper {
    void inserIntoOrder(TbOrder order);
    /*@Param("orderPrice") long orderPrice,@Param("orderSum")
    long orderSum,@Param("orderNum") String orderNum,@Param("orderState")
     String orderState,@Param("orderTime") String orderTime
     ,@Param("orderTicketName") String orderTicketName,
     @Param("orderTicketPlace") String orderTicketPlace,
     @Param("orderTicketTime") String orderTicketTime,@Param("orderTicketImage") String orderTicketImage,
     @Param("userId") long userId
*/
}
