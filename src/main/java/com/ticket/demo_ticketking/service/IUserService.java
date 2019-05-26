package com.ticket.demo_ticketking.service;


import com.ticket.demo_ticketking.po.TbUser;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IUserService {
    /**
     * 注册
     * @param tbUser
     * @throws Exception
     */
     void register(TbUser tbUser) throws Exception;

    /**
     * 登录
     * @param userTel
     * @param userPassword
     * @throws Exception
     */
    TbUser login(String userTel, String userPassword) throws Exception;

    /**
     * 查询
     * @return
     */
     List<TbUser> queryUser(); //后台查询

    /**
     * 添加
     * @param tbUser
     */
     void  userss(TbUser tbUser) throws Exception;

    /**
     * 更新
     * @param tbUser
     * @throws Exception
     */
     void UpdateUser(TbUser tbUser) throws Exception;

    /**
     * id查询
     * @param userId
     * @return
     */
     TbUser queryById(@Param("userId") Integer userId);

    TbUser queryUserName(@Param("userTel") String userTel);
     
}
