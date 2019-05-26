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

import javax.servlet.http.HttpSession;
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
    public String selectUserTicket(HttpSession session, Model model){
        Long usersId = (Long) session.getAttribute("userId");
        try {
            TbUser tbUser = iUserTicketService.selectUserTicket(usersId);
            model.addAttribute("tbUser",tbUser);
            return "我的票王";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    @RequestMapping("/goorders")
    public String queryOrder(HttpSession session, Integer select, Model model){
        Long usersId = (Long) session.getAttribute("userId");
        try {
            List<TbOrder> tbOrder = orderService.queryOrder(usersId,select);
            model.addAttribute("tbOrder",tbOrder);
            return "我的订单";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    @RequestMapping("/balance")
    public String queryBalance(HttpSession session,Model model){
        TbUser tbUser = null;
        Long usersId = (Long) session.getAttribute("userId");
        try {
            tbUser = iUserTicketService.selectUserTicket(usersId);
            model.addAttribute("tbUser", tbUser);
            return "我的余额";
        } catch (Exception e) {
            e.printStackTrace();
        }
            return null;
    }
    @RequestMapping("/name")
    public String queryTel(HttpSession session,Model model){
        Long usersId = (Long) session.getAttribute("userId");
        TbUser tbUser = null;
        try {
            tbUser = iUserTicketService.selectUserTicket(usersId);
            model.addAttribute("tbUser",tbUser);
            return "个人信息";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    @RequestMapping("/add")
    public String queryAdd(HttpSession session,Model model){
        Long usersId = (Long) session.getAttribute("userId");
        try {
            List<UserAddVO> tbAdds = addService.queryAdd(1);
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
        public String insertAdd(HttpSession session, String addAdd,String userName,String userTel){
        JsonResult jsonResult = new JsonResult();
        Long usersId = (Long) session.getAttribute("userId");
        try {
            addUserService.insertAdd(1,addAdd);
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
    public String updatePassword(String userPassword,HttpSession session,String userPassword1,String userPassword2,Model model) throws Exception {
        JsonResult jsonResult = new JsonResult();
        Long usersId = (Long) session.getAttribute("userId");
        TbUser tbUser = iUserTicketService.selectUserTicket(1);
        String userPassword3 = tbUser.getUserPassword();
        model.addAttribute("tbUser",tbUser);

        if(userPassword3.equals(userPassword) && userPassword1.equals(userPassword2)){
            iUserService.updatePassword(userPassword1,usersId);
            jsonResult.setCode(1);
        }else{
            jsonResult.setCode(0);
            jsonResult.setMsg("两次密码输入不一致");
        }
        return "密码管理";
    }

    @RequestMapping("/youhuiquan")
    public String youhuiquan(){
        return "我的优惠券";
    }
}
