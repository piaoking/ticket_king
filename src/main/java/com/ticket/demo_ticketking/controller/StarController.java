package com.ticket.demo_ticketking.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.ticket.demo_ticketking.po.TbStar;
import com.ticket.demo_ticketking.po.TbTicket;
import com.ticket.demo_ticketking.service.IStarService;
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
@RequestMapping("/star")
public class StarController {
    @Autowired
    private IStarService iStarService;
//    @RequestMapping("/tar")
//    public String query(Model model){
//        List<TbStar> tbStars = iStarService.queryStar();
//        model.addAttribute("tbStars",tbStars);
//        return "star";
//
//    }
    @RequestMapping("/stars")
    @ResponseBody
    public JsonResult saveStar(TbStar tbStar){
        System.out.println("添加");
        JsonResult jsonResult=new JsonResult();
        if (null!=tbStar){
            iStarService.saveStar(tbStar);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;
    }

    /**
     * id查询
     * @param starId
     * @param model
     * @return
     */
    @RequestMapping("/starById/{starId}")
    public String queryById(@PathVariable("starId") Integer starId, Model model) throws Exception {
        System.out.println("sssss");
        TbStar tbStar = iStarService.queryStarId(starId);
        model.addAttribute("starupdate",tbStar);
        return "starupdate";
    }

    @RequestMapping("/updatestar")
    @ResponseBody
    public  JsonResult updateticket(TbStar TbStar) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=TbStar){
            iStarService.updatequery(TbStar);
            System.out.println("---->"+TbStar.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }

    @RequestMapping("/tar")
    public String queryAllStation(Model model,@RequestParam(defaultValue = "1",value = "pageNum") Integer pageNum){
        PageHelper.startPage(pageNum,10);
        List<TbStar> stationList =iStarService.queryStar();
        PageInfo<TbStar> pageInfo = new PageInfo<>(stationList);
        model.addAttribute("pageInfo",pageInfo);
        return "star";
    }
}
