package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.po.TbIntro;
import com.ticket.demo_ticketking.po.TbLv;
import com.ticket.demo_ticketking.service.IIntroService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/intro")
public class IntroController {
    @Autowired
    private IIntroService iIntroService;
    @RequestMapping("/in")
    public String queryIntro(Model model){
        List<TbIntro> tbIntros = iIntroService.queryIntro();
        model.addAttribute("tbIntros",tbIntros);
        return "intro";

    }
    @RequestMapping("/lvs")
    @ResponseBody
    public JsonResult saveSee(TbIntro tbIntro){
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbIntro){
            iIntroService.saveIntro(tbIntro);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;

    }

    @RequestMapping("/introById/{introId}")
    public String queryshowId(@PathVariable("introId") Integer introId, Model model) throws Exception {
        System.out.println("sssss");
        TbIntro tbIntro = iIntroService.queryIntroById(introId);
        model.addAttribute("introupdate", tbIntro);
        return "introupdate";
    }

    @RequestMapping("/updateintro")
    @ResponseBody
    public  JsonResult updateintro(TbIntro tbIntro ) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbIntro){
            iIntroService.updateIntro(tbIntro);
            System.out.println("---->"+tbIntro.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }
}
