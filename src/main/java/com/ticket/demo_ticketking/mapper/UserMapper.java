package com.ticket.demo_ticketking.mapper;


import com.ticket.demo_ticketking.po.TbUser;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface UserMapper {
    void register(TbUser tbUser);
    TbUser checkUsername(@Param("userTel") String userTel);
    void insertUser(@Param("userTel") String userTel,@Param("userName") String userName);
    void updatePassword(@Param("userPassword") String userPassword,@Param("userId") long userId);
}
