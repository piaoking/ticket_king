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
    TbUser query(@Param("userId") long userId);
    void insertUser(@Param("userTel") String userTel,@Param("userName") String userName);
    void updatePassword(@Param("userPassword") String userPassword,@Param("userId") long userId);
    TbUser queryBalanceById(@Param("userId") Long userId);

    void frozenMoney(@Param("userFrozen") Long userFrozen, @Param("userId") Long userId);

    void kouFrozenMoney(@Param("userFrozen") Long userFrozen, @Param("userId") Long userId);

    TbUser queryUserById(@Param("userId") Integer userId);
}
