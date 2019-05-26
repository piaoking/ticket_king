package com.ticket.demo_ticketking.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.ticket.demo_ticketking.po.TbLv;
import com.ticket.demo_ticketking.service.ILvService;
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
@RequestMapping("/lv")
public class LvController {
    @Autowired
    private ILvService iLvService;
//    @RequestMapping("ll")
//    public String quertLv(Model model){
//        List<TbLv> tbLvs = iLvService.queryLv();
//        model.addAttribute("tbLvs",tbLvs);
//        return "lv";
//    }
    @RequestMapping("/lvs")
    @ResponseBody
    public JsonResult saveSee(TbLv tbLv){
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbLv){
            iLvService.savaLv(tbLv);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;

    }

    @RequestMapping("/lvById/{lvId}")
    public String queryshowId(@PathVariable("lvId") Integer lvId, Model model) throws Exception {
        System.out.println("sssss");
        TbLv tbLv = iLvService.queryLvById(lvId);
        model.addAttribute("lvupdate", tbLv);
        return "lvupdate";
    }

    @RequestMapping("/updatelv")
    @ResponseBody
    public  JsonResult updateorder(TbLv tbLv ) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbLv){
            iLvService.updateLv(tbLv);
            System.out.println("---->"+tbLv.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }
    @RequestMapping("/ll")
    public String queryAllStation(Model model,@RequestParam(defaultValue = "1",value = "pageNum") Integer pageNum){
        PageHelper.startPage(pageNum,10);
        List<TbLv> stationList = iLvService.queryLv();
        PageInfo<TbLv> pageInfo = new PageInfo<>(stationList);
        model.addAttribute("pageInfo",pageInfo);
        return "lv";
    }

}
