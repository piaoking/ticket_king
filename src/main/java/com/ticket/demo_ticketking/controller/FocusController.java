package com.ticket.demo_ticketking.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.ticket.demo_ticketking.po.TbFocus;
import com.ticket.demo_ticketking.po.TbIntro;
import com.ticket.demo_ticketking.po.TbTicket;
import com.ticket.demo_ticketking.service.IFocusService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/focus")
public class FocusController {
    @Autowired
    private IFocusService iFocusService;

//    @RequestMapping("/fo")
//    public String queryfocus(Model model){
//        List<TbFocus> tbFoci = iFocusService.queryFocus();
//        model.addAttribute("tbFoci",tbFoci);
//        return "focus";
//    }
    @RequestMapping("/savafocus")
    @ResponseBody
    public JsonResult saveSee(TbFocus tbFocus){
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbFocus){
            iFocusService.savaFocus(tbFocus);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;

    }

    @RequestMapping("/focusById/{focusId}")
    public String queryshowId(@PathVariable("focusId") Integer focusId, Model model) throws Exception {
        System.out.println("sssss");
        TbFocus tbFocus = iFocusService.queryFocusById(focusId);
        model.addAttribute("focusupdate", tbFocus);
        return "focusupdate";
    }

    @RequestMapping("/updatefocus")
    @ResponseBody
    public  JsonResult updateintro(TbFocus tbFocus ) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbFocus){
            iFocusService.upateFocus(tbFocus);
            System.out.println("---->"+tbFocus.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }

    @RequestMapping("/fo")
    public String queryAllStation(Model model,@RequestParam(defaultValue = "1",value = "pageNum") Integer pageNum){
        PageHelper.startPage(pageNum,10);
        List<TbFocus> stationList = iFocusService.queryFocus();
        PageInfo<TbFocus> pageInfo = new PageInfo<>(stationList);
        model.addAttribute("pageInfo",pageInfo);
        return "focus";
    }

}
