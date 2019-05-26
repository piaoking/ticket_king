package com.ticket.demo_ticketking.mapper;


import com.ticket.demo_ticketking.po.TbUser;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface UserMapper {
    //注册
    void register(TbUser tbUser);
    //登录
    TbUser checkUsername(@Param("userTel") String userTel);    //后台查询
    List<TbUser> queryUser();

    TbUser queryUserName(@Param("userTel") String userTel);
    void  userss(TbUser tbUser);

    /**
     *
     * 更新
     * @param tbUser
     */
    void UpdateUser(TbUser tbUser);

    /**
     * id查询
     * @param userId
     * @return
     */
    TbUser queryById(@Param("userId") Integer userId);
}
