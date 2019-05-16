package com.ticket.demo_ticketking.controller;




import com.ticket.demo_ticketking.service.IUserService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IUserService userService;

    @RequestMapping("/login")
    @ResponseBody
    public JsonResult login(String userTel, String userPassword){

        JsonResult jsonResult = new JsonResult();
        try {
            userService.login(userTel,userPassword);
            jsonResult.setCode(1);
        } catch (Exception e) {
            e.printStackTrace();
            jsonResult.setCode(0);
            jsonResult.setMsg("用户名或者密码错误");
        }
        return jsonResult;
    }


}
