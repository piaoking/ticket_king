package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbOrder;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface OrderMapper {
    List<TbOrder> queryOrder(@Param("userId") long userId,@Param("select") Integer select);
}
