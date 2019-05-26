package com.ticket.demo_ticketking.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.ticket.demo_ticketking.po.TbTicket;
import com.ticket.demo_ticketking.service.ITicketService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/king")
public class TbTicketController {
    @Autowired
    private ITicketService iTicketService;

    //商品表
//    @RequestMapping("/ticket")
//    public String queryTbTicket(Model model){
//        List<TbTicket> tbTickets = iTicketService.queryTbTicket();
//        model.addAttribute("TbTicket",tbTickets);
//        return "ticket";
//
//    }
    @RequestMapping("tic")
    @ResponseBody
    public  JsonResult save(TbTicket tbTicket) throws IOException {
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbTicket){
            iTicketService.savaTbTicket(tbTicket);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;
    }

    /**
     * id查询
     * @param ticketId
     * @param model
     * @return
     */
    @RequestMapping("/ticketById/{ticketId}")
    public String queryById(@PathVariable("ticketId") Integer ticketId, Model model){
        System.out.println("sssss");
        TbTicket tbTicket = iTicketService.TicketById(ticketId);
        model.addAttribute("ticketupdate",tbTicket);
        return "ticketupdate";
    }

    @RequestMapping("/updateticket")
    @ResponseBody
    public  JsonResult updateticket(TbTicket tbTicket) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbTicket){
            iTicketService.updateTicket(tbTicket);
            System.out.println("---->"+tbTicket.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }

    @RequestMapping("/queryAllStation")
    public String queryAllStation(Model model,@RequestParam(defaultValue = "1",value = "pageNum") Integer pageNum){
        PageHelper.startPage(pageNum,10);
        List<TbTicket> stationList = iTicketService.queryTbTicket();
        PageInfo<TbTicket> pageInfo = new PageInfo<>(stationList);
        model.addAttribute("pageInfo",pageInfo);
        return "ticket";
    }



}
