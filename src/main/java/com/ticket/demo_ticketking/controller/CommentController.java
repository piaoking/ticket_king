package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.vo.Comment;
import com.ticket.demo_ticketking.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/pinlun")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @RequestMapping("/comment")
    public String queryComment(Model model) throws Exception {
        List<Comment> comments = commentService.queryComment();
        model.addAttribute("comments",comments);
        return "all_pinlun";
    }
}
