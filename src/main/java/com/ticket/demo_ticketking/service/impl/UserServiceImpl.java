package com.ticket.demo_ticketking.service.impl;



import com.ticket.demo_ticketking.mapper.UserMapper;
import com.ticket.demo_ticketking.po.TbUser;
import com.ticket.demo_ticketking.service.IUserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserMapper userMapper;
    @Override
    public void register(TbUser tbUser) throws Exception {
        userMapper.register(tbUser);
    }

    @Override
    public void login(String userTel, String userPassword) throws Exception {
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(userTel, userPassword);
        subject.login(token);

    }

    @Override
    public void insertUser(String userTel, String userName) {
        userMapper.insertUser(userTel,userName);

    }

    @Override
    public void updatePassword(String userPassword, long userId) throws Exception {
        userMapper.updatePassword(userPassword,userId);
    }

}
