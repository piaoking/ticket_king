package com.ticket.demo_ticketking.service.impl;



import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.UserMapper;
import com.ticket.demo_ticketking.po.TbUser;
import com.ticket.demo_ticketking.service.IUserService;
import com.ticket.demo_ticketking.utils.MD5Utils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserMapper userMapper;
    @Override
    public void register(TbUser tbUser) throws Exception {
        userMapper.register(tbUser);
    }

    @Override
    public TbUser login(String userTel, String userPassword ) throws Exception {
        Subject subject = SecurityUtils.getSubject();
        TbUser tbUser = userMapper.checkUsername(userTel);
        UsernamePasswordToken token = new UsernamePasswordToken(userTel, userPassword);
        subject.login(token);
        return tbUser;

    }

    @Override
    public List<TbUser> queryUser() {
        List<TbUser> tbUsers = userMapper.queryUser();
        return tbUsers;
    }

    @Override
    public void userss(TbUser tbUser) throws Exception{
        String userTel = tbUser.getUserTel();
        TbUser tbUser1 = userMapper.checkUsername(userTel);
        if (tbUser1!=null){
            throw new UserIdNotFoundException();
        }
        String passwordSalt = "qianfeng";
        tbUser.setUserPassword(MD5Utils.md5(tbUser.getUserPassword(),passwordSalt));
         userMapper.userss(tbUser);

    }

    @Override
    public void UpdateUser(TbUser tbUser) throws Exception {
        if(null!=tbUser){
            userMapper.UpdateUser(tbUser);
        }else{
            throw new UserIdNotFoundException();
        }
    }
    /**
     * 根据id查找
     * @param userId
     * @return
     */
    @Override
    public TbUser queryById(Integer userId) {
        TbUser tbUser = userMapper.queryById(userId);
        return tbUser;

    }

    @Override
    public TbUser queryUserName(String userTel) {
        TbUser tbUser = userMapper.queryUserName(userTel);
        return tbUser;
    }


}
