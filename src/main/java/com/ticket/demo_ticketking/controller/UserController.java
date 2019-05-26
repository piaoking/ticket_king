package com.ticket.demo_ticketking.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.ticket.demo_ticketking.po.TbLv;
import com.ticket.demo_ticketking.po.TbUser;
import com.ticket.demo_ticketking.service.IUserService;
import com.ticket.demo_ticketking.vo.JsonResult;
import com.ticket.demo_ticketking.vo.LoginInfoVO;
import com.zhenzi.sms.ZhenziSmsClient;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Random;


@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IUserService userService;

    /**
     * 登录
     * @param userTel
     * @param userPassword
     * @return
     */
    @RequestMapping("/login")
    @ResponseBody
    public JsonResult login(String userTel, String userPassword,HttpSession session){
        JsonResult jsonResult = new JsonResult();
        session.setAttribute("userTel",userTel);
        TbUser tbUser = userService.queryUserName(userTel);
        long userId = tbUser.getUserId();
        session.setAttribute("userId",userId);
        long cedo= (long) session.getAttribute("userId");
        try {
            TbUser login = userService.login(userTel, userPassword);
            long userLv = login.getUserLv();

            if (userLv>5){
                jsonResult.setCode(1);
            }else  {
                jsonResult.setCode(2);
            }
        } catch (Exception e) {
            e.printStackTrace();
            jsonResult.setCode(0);
            jsonResult.setMsg("用户名或者密码错误");
        }
        return jsonResult;
    }

    /**
     * 查询所有
     * @param model
     * @return
     */
//    @RequestMapping("index")
//    public  String queryUser(Model model){
//        List<TbUser> tbUsers = userService.queryUser();
//        model.addAttribute("tbUsers",tbUsers);
//        return "index";
//
//    }

    /**
     * 添加
     * @param tbUser
     * @return
     */
    @RequestMapping("uu")
    @ResponseBody
    public  JsonResult save(TbUser tbUser) throws Exception {
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (tbUser!=null){
            userService.userss(tbUser);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;
    }

    /**
     * 更新
     * @param tbUser
     * @return
     */
    @RequestMapping("/updateuser")
    @ResponseBody
    public  JsonResult updateUser(TbUser tbUser) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbUser){
            userService.UpdateUser(tbUser);
            System.out.println("---->"+tbUser.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }



        @RequestMapping("/queryById/{userId}")
        public String queryById(@PathVariable("userId") Integer userId,Model model,HttpSession session){
            System.out.println("sssss");
            TbUser tbUser = userService.queryById(userId);
            session.setAttribute("userId",userId);
            model.addAttribute("userupdate",tbUser);
            return "userupdate";

        }

    @RequestMapping("/queryName/{user_tel}")
    public String queryByName(@PathVariable("user_tel") String user_tel,Model model,HttpSession session){
        System.out.println("sssss");
        TbUser tbUser = (TbUser) userService.queryUserName(user_tel);
        session.setAttribute("user_tel",user_tel);
        model.addAttribute("userupdate",tbUser);
        return "denglu2";
    }




//
//    @RequestMapping("/ById/{userId}")
//    public String queryById2(@PathVariable("userId") Integer userId,Model model,HttpSession session){
//        System.out.println("sssss");
//        TbUser tbUser = userService.queryById(userId);
//        model.addAttribute("userupdate",tbUser);
//        session.setAttribute("userId",userId);
//        return "denglu3";
//
//
//    }

    @RequestMapping("/pCode")
    @ResponseBody
    public JsonResult phoneGetCode(LoginInfoVO loginInfoVO, HttpSession session){
        JsonResult jsonResult = new JsonResult();
        try{

            TbUser tbUser = new TbUser();

            //生成一个随机6位数验证码
            String verifyCode = String.valueOf(new Random().nextInt(899999)+100000);

            ZhenziSmsClient client = new ZhenziSmsClient("https://sms_developer.zhenzikj.com",
                    "101569","292573e4-dd21-4a94-867a-fa7c65bd89b6");
            String result = client.send(loginInfoVO.getUserTel(),"您的验证码为:"+verifyCode+", 该码有效期为5分钟,该码仅一次有效！ ");


            jsonResult.setCode(1);
            jsonResult.setMsg("发送成功");

            //获取的验证码保存在session中
            session.setAttribute("verifyCode",verifyCode);
//                session.setAttribute("verifyCode",verifyCode);

        }catch (Exception e){
            e.printStackTrace();
            jsonResult.setCode(0);
        }
        return jsonResult;
    }

    @RequestMapping("/pLogin")
    @ResponseBody
    public JsonResult phoneLogin(LoginInfoVO loginInfoVO, HttpSession session){
        JsonResult jsonResult = new JsonResult();

        //获取手机验证方式获取的验证码
        String code = (String) session.getAttribute("verifyCode");

        loginInfoVO.setVerification(code);
        //于用户输入的验证码做对比
        if (code.equals(loginInfoVO.getVerification())){
            Subject subject = SecurityUtils.getSubject();
            try {
                subject.login(new UsernamePasswordToken(loginInfoVO.getUserTel(),"psw"));
                jsonResult.setCode(1);
            } catch (Exception e) {
                e.printStackTrace();
                jsonResult.setCode(0);
                jsonResult.setMsg("用户名或者密码错误");
            }
        }
        return jsonResult;
    }

    @RequestMapping("/index")
    public String queryAllStation(Model model,@RequestParam(defaultValue = "1",value = "pageNum") Integer pageNum){
        PageHelper.startPage(pageNum,10);
        List<TbUser> stationList = userService.queryUser();
        PageInfo<TbUser> pageInfo = new PageInfo<>(stationList);
        model.addAttribute("pageInfo",pageInfo);
        return "index";
    }






}
