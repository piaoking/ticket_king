package com.ticket.demo_ticketking.mapper;


import com.ticket.demo_ticketking.po.TbUser;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
    void register(TbUser tbUser);
    TbUser checkUsername(@Param("userTel") String userTel);
    TbUser query(@Param("userId") long userId);
}
