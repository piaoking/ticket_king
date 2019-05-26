package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.po.TbComment;
import com.ticket.demo_ticketking.service.ICommentService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("comment")
public class CommentController {
    @Autowired
    private ICommentService iCommentService;

    @RequestMapping("com")
    public  String queryComment(Model model){
        List<TbComment> tbComments = iCommentService.queryComment();
        model.addAttribute("tbComments",tbComments);
        return "comment";

    }
    @RequestMapping("/comments")
    @ResponseBody
    public JsonResult saveSee(TbComment tbComment){
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbComment){
            iCommentService.saveComment(tbComment);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;

    }
    @RequestMapping("/commentById/{commentId}")
    public String queryshowId(@PathVariable("commentId") Integer commentId, Model model) throws Exception {
        System.out.println("sssss");
        TbComment tbComment = iCommentService.queryCommntById(commentId);
        model.addAttribute("commentupdate", tbComment);
        return "commentupdate";
    }
    @RequestMapping("/updatecomment")
    @ResponseBody
    public  JsonResult updatecomment(TbComment tbComment ) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbComment){
            iCommentService.updateComment(tbComment);
            System.out.println("---->"+tbComment.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }
}
