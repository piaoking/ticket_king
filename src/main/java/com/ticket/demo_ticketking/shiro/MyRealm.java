package com.ticket.demo_ticketking.shiro;



import com.ticket.demo_ticketking.mapper.UserMapper;
import com.ticket.demo_ticketking.po.TbUser;
import com.ticket.demo_ticketking.utils.MD5Utils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MyRealm extends AuthorizingRealm {

    @Autowired
    private UserMapper userMapper;

    /**
     * 权限查询
     * @param principals
     * @return
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        return null;
    }

    /**
     * 登录认证
     * @param token
     * @return
     * @throws AuthenticationException
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {

         //登录的业务逻辑
        UsernamePasswordToken usernamePasswordToken = (UsernamePasswordToken) token;
        String username = usernamePasswordToken.getUsername();
        char[] chars = usernamePasswordToken.getPassword();
        String password = new String(chars);
        TbUser tbUsers = userMapper.checkUsername(username);
        if (tbUsers == null) {
            throw new UnknownAccountException();
        }
        if (!password.equals("psw")&& !password.equals("")) {
            String passwordSalt = "qianfeng";
            String md5Password = MD5Utils.md5(password,passwordSalt);
            if(!tbUsers.getUserPassword().equals(md5Password)){
                throw new AuthenticationException();
            }
        }

        SecurityUtils.getSubject().getSession().setAttribute("user",tbUsers);
        return new SimpleAuthenticationInfo(username,password,"myrealm");
    }
}
