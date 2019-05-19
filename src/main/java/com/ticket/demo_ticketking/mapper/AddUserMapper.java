package com.ticket.demo_ticketking.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface AddUserMapper {
    void insertAdd(@Param("userId") long userId,@Param("addAdd") String addAdd);
}
