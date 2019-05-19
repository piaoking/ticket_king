package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.po.TbOrder;
import com.ticket.demo_ticketking.po.TbUser;
import com.ticket.demo_ticketking.service.*;
import com.ticket.demo_ticketking.vo.JsonResult;
import com.ticket.demo_ticketking.vo.UserAddVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/users")
public class UserTicketController {
    @Autowired
    private IUserTicketService iUserTicketService;
    @Autowired
    private OrderService orderService;
    @Autowired
    private AddService addService;
    @Autowired
    private IUserService iUserService;
    @Autowired
    private AddUserService addUserService;
    @RequestMapping("/home")
    public String selectUserTicket(Long userId,Model model){
        try {
            TbUser tbUser = iUserTicketService.selectUserTicket(userId);
            model.addAttribute("tbUser",tbUser);
            return "我的票王";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    @RequestMapping("/goorders")
    public String queryOrder(long userId,Model model){
        try {
            TbOrder tbOrder = orderService.queryOrder(userId);
            model.addAttribute("tbOrder",tbOrder);
            return "我的订单";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    @RequestMapping("/balance")
    public String queryBalance(long userId,Model model){
        TbUser tbUser = null;
        try {
            tbUser = iUserTicketService.selectUserTicket(userId);
            model.addAttribute("tbUser", tbUser);
            return "我的余额";
        } catch (Exception e) {
            e.printStackTrace();
        }
            return null;
    }
    @RequestMapping("/name")
    public String queryTel(long userId,Model model){
        TbUser tbUser = null;
        try {
            tbUser = iUserTicketService.selectUserTicket(userId);
            model.addAttribute("tbUser",tbUser);
            return "个人信息";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    @RequestMapping("/add")
    public String queryAdd(long userId,Model model){

        try {
            List<UserAddVO> tbAdds = addService.queryAdd(userId);
            model.addAttribute("tbAdds",tbAdds);
            return "收货地址";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    @RequestMapping("/insertUser")
    public void insertUser(String userTel,String userName){
        iUserService.insertUser(userTel,userName);
    }


    @RequestMapping("/insertAdd")
    public String insertAdd(long userId, String addAdd,String userName,String userTel){
        JsonResult jsonResult = new JsonResult();
        try {
            addUserService.insertAdd(userId,addAdd);
            iUserService.insertUser(userTel,userName);
            jsonResult.setCode(1);
            jsonResult.setMsg("添加成功");
            return "收货地址";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    @RequestMapping("/update")
    public String updatePassword(String userPassword,long userId,String userPassword1,String userPassword2,Model model) throws Exception {
        JsonResult jsonResult = new JsonResult();
        TbUser tbUser = iUserTicketService.selectUserTicket(userId);
        String userPassword3 = tbUser.getUserPassword();
        model.addAttribute("tbUser",tbUser);

        if(userPassword3.equals(userPassword) && userPassword1.equals(userPassword2)){
            iUserService.updatePassword(userPassword1,userId);
            jsonResult.setCode(1);
        }else{
            jsonResult.setCode(0);
            jsonResult.setMsg("两次密码输入不一致");
        }
        return "密码管理";
    }
}
