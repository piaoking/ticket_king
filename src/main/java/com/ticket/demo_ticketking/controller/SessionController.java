package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.po.TbSession;
import com.ticket.demo_ticketking.po.TbShow;
import com.ticket.demo_ticketking.po.TbSon;
import com.ticket.demo_ticketking.service.ISessionService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/see")
public class SessionController {
    @Autowired
    private ISessionService iSessionService;

    @RequestMapping("session")
    public  String querySession (Model model){
        List<TbSession> tbSessions = iSessionService.querySession();
        model.addAttribute("tbSessions",tbSessions);
        return "session";

    }
    @RequestMapping("/sees")
    @ResponseBody
    public JsonResult saveSee(TbSession tbSession){
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbSession){
            iSessionService.saveSession(tbSession);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;

    }

    @RequestMapping("/sessionById/{sessionId}")
    public String queryshowId(@PathVariable("sessionId") Integer sessionId, Model model) throws Exception {
        System.out.println("sssss");
        TbSession tbSession = iSessionService.querySessionById(sessionId);
        model.addAttribute("sessionupdate",tbSession);
        return "sessionupdate";
    }

    /**
     * 更新
     * @param
     * @return
     * @throws Exception
     */
    @RequestMapping("/updatesession")
    @ResponseBody
    public  JsonResult updatesession(TbSession tbSession) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbSession){
            iSessionService.updateSession(tbSession);
            System.out.println("---->"+tbSession.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }
}
