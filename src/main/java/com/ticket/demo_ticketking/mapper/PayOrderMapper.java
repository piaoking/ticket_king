package com.ticket.demo_ticketking.mapper;


import com.ticket.demo_ticketking.vo.PayOrderVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface PayOrderMapper {
    PayOrderVO payOrder(@Param("orderNum") String orderNum);
}
